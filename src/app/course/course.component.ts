import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../model/lesson';
import { CoursesService } from "../services/courses.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { catchError, finalize, merge, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-course',
  standalone: false,
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit {
  course!: Course;
  lessons: Lesson[] = [];
  loading = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  selection = new SelectionModel<Lesson>(true, []);

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService) {
  }

  displayedColumns = ['select', 'seqNo', "description", "duration"];
  expandedLesson: Lesson | null = null;

  ngOnInit() {
    this.course = this.route.snapshot.data["course"];
    this.loadLessonsPage();
  }

  onLessonToggled(lesson: Lesson) {
    this.selection.toggle(lesson);
    console.log(this.selection.selected);
  }

  loadLessonsPage() {
    this.loading = true;
    this.coursesService.findLessons(
      this.course?.id,
      this.sort?.direction ?? "asc",
      this.paginator?.pageIndex ?? 0,
      this.paginator?.pageSize ?? 3,
      this.sort?.active ?? "seqNo")
      .pipe(
        tap(lessons => this.lessons = lessons),
        catchError(err => {
          console.log("Error loading lessons", err);
          alert("Error loading lessons.");

          return throwError(err);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe();
  }

  onToggleLesson(lesson: Lesson) {
    if (lesson == this.expandedLesson) {
      this.expandedLesson = null;
    }
    else {
      this.expandedLesson = lesson;
    }
  }

  ngAfterViewInit() {
    this.sort!.sortChange.subscribe(() => this.paginator!.pageIndex = 0);
    merge(this.sort!.sortChange, this.paginator!.page)
      .pipe(
        tap(() => this.loadLessonsPage())
      )
      .subscribe();
  }

  isAllSelected() {
    return this.selection.selected?.length == this.lessons?.length;
  }

  toggleAll() {
    if (this.isAllSelected()) {
      this.selection.clear();
    }
    else {
      this.selection.select(...this.lessons);
    }
  }
}
