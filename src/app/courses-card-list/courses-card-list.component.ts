import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';

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

  constructor() { }

  ngOnInit(): void {
  }

  editCourse(course: Course) {
  }
}
