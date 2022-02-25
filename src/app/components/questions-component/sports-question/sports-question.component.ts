import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-sports-question',
  templateUrl: './sports-question.component.html',
  styleUrls: ['./sports-question.component.css']
})
export class SportsQuestionComponent implements OnInit {
 
  public questionText: String = ""
  public questionId: String = ""
  public answer: Boolean = false
  public postion: number = 4


  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.getQuestion()
  }


  public getQuestion():void{
    var sportsQuestion: Question = this.storageService.getItemQuestion(this.postion)
    this.questionText = sportsQuestion.questionText
    this.questionId = sportsQuestion._id
  }


  public saveAnswer():void{
    this.storageService.saveLocalAnswer(this.questionId, this.answer)
  }



}
