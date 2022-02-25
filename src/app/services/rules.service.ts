import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RulesService {

  private API_URI = 'http://192.168.1.108:3000/quizle/';

  constructor(private http: HttpClient) { }

  public getRules(): Observable<any> {
    let dir: string = this.API_URI + 'rules';
    return this.http.get(dir);
  }
}
