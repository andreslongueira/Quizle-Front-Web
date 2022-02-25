import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private API_URI = 'http://192.168.1.108:3000/quizle/';

  constructor(private http: HttpClient) { }

  public getQuestions(): Observable<any> {
    let dir: string = this.API_URI + 'questions';
    return this.http.get(dir);
  }
}