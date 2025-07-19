import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

    beginnerCourses$: Observable<Course[]> | undefined;
    advancedCourses$: Observable<Course[]>  | undefined;

    constructor(private coursesService: CoursesService) {      
    }

    ngOnInit() {

        const courses$ = this.coursesService.findAllCourses();

        this.beginnerCourses$ = courses$.pipe(
          tap(courses => console.log('Todos los cursos:', courses)),
          map(courses =>
             courses.filter(course => course.category === 'BEGINNER')
          ),
          tap(courses => console.log('Cursos BEGINNER:', courses))
        );

        this.advancedCourses$ = courses$.pipe(
            map(courses => courses.filter(course => course.category === 'ADVANCED')),
            tap(courses => console.log('Cursos ADVANCED:', courses))
        );

    }

}