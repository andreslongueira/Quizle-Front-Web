import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-history-question',
  templateUrl: './history-question.component.html',
  styleUrls: ['./history-question.component.css']
})
export class HistoryQuestionComponent implements OnInit {

 
  public questionText: String = ""
  public questionId: String = ""
  public answer: Boolean = false
  public postion: number = 2


  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.getQuestion()
  }


  public getQuestion():void{
    var historyQuestion: Question = this.storageService.getItemQuestion(this.postion)
    this.questionText = historyQuestion.questionText
    this.questionId = historyQuestion._id
  }


  public saveAnswer():void{
    this.storageService.saveLocalAnswer(this.questionId, this.answer)
  }



}
