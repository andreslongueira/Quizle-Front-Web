import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionAdminService {

  private API_URI = 'http://10.1.201.26:3000/quizle/';

  constructor(private http: HttpClient) { }

  public getQuestions(): Observable<any> {
    let dir: string = this.API_URI + 'admin/questions';
    return this.http.get(dir);
  }

  public saveQuestions(obj: any): Observable<any> {
    let dir: string = this.API_URI + 'admin/questions';
    return this.http.post(dir, obj);
  }

  public modifyQuestions(idQuestion: any, obj: any): Observable<any> {
    let dir: string = this.API_URI + 'admin/questions/' + idQuestion;
    return this.http.put(dir, obj);
  }

public deleteQuestions(day:any): Observable<any> {
    let dir: string = this.API_URI + 'admin/questions/';
    return this.http.delete(dir, day);
  }

}
