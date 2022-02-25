import { Injectable } from '@angular/core';
import { Answer } from '../models/answer.model';
import { categoryQuestion, dayQuestions, Question } from '../models/question.model';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage = localStorage;
  public answerArray: Array<Answer> = [];
  public dayquestionArray: Array<Question> = [];


  constructor() {}


  
  public saveLocalAnswer(questionId:String, answer:Boolean): void{
    let answerObj = {answer:answer, questionId: questionId}
    this.answerArray.push(answerObj)
    this.storage.setItem("answer", JSON.stringify(this.answerArray)) 
  }


  public saveLocalQuestion(dayquestion: dayQuestions): void{
    this.dayquestionArray.push(dayquestion.questions.scienceQuestion)
    this.dayquestionArray.push(dayquestion.questions.geographyQuestion)
    this.dayquestionArray.push(dayquestion.questions.historyQuestion)
    this.dayquestionArray.push(dayquestion.questions.artQuestion)
    this.dayquestionArray.push(dayquestion.questions.sportsQuestion)
    this.storage.setItem("questions", JSON.stringify(this.dayquestionArray)) 
  }

  public getItem(itemKey: string): string {
    let item: any = this.storage.getItem(itemKey);
    if (item == undefined) {
      item = '';
    }
    return item;
  }

  public getItemQuestion(position: number): Question {
    let itemQuestion: any = this.storage.getItem("questions");
    this.dayquestionArray =  JSON.parse(itemQuestion)
    return this.dayquestionArray[position];
  }


  public limpiarStorage(): void {
    this.storage.clear();
  }

}