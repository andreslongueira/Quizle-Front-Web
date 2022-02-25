import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-geography-question',
  templateUrl: './geography-question.component.html',
  styleUrls: ['./geography-question.component.css']
})
export class GeographyQuestionComponent implements OnInit {

 
  public questionText: String = ""
  public questionId: String = ""
  public answer: Boolean = false
  public postion: number = 1


  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.getQuestion()
  }


  public getQuestion():void{
    var geographyQuestion: Question = this.storageService.getItemQuestion(this.postion)
    this.questionText = geographyQuestion.questionText
    this.questionId = geographyQuestion._id
  }


  public saveAnswer():void{
    this.storageService.saveLocalAnswer(this.questionId, this.answer)
  }



}
