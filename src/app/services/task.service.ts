import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from  '../../app/Task';


@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  
  newTask(task:Task):Observable<Task>{
    return  this.http.post<Task>(this.apiUrl, task);
  }

}
