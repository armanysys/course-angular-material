import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

    findAllCourses(): Observable<Course[]> {
        return this.http.get<{ payload: Course[] }>('/api/courses')
            .pipe(
                map(res => {
                  return res.payload;
                })
            );
    }


}
