import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { openEditCourseDialog } from '../course-dialog/course-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-courses-card-list',
  standalone: false,
  templateUrl: './courses-card-list.component.html',
  styleUrl: './courses-card-list.component.scss'
})
export class CoursesCardListComponent implements OnInit {
  @Input()
  courses: Course[] | undefined;
  cols = 1;
  rowHeight = '500px';
  handsetPortrait = false;

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  editCourse(course: Course) {
    openEditCourseDialog(this.dialog, course)
      .pipe(
        filter(val => !!val)
      )
      .subscribe(
        val => console.log('new course value:', val)
      );
  }
}
