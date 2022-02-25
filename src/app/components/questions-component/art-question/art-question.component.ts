import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-art-question',
  templateUrl: './art-question.component.html',
  styleUrls: ['./art-question.component.css']
})
export class ArtQuestionComponent implements OnInit {
 
  public questionText: String = ""
  public questionId: String = ""
  public answer: Boolean = false
  public postion: number = 3


  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.getQuestion()
  }


  public getQuestion():void{
    var artQuestion: Question = this.storageService.getItemQuestion(this.postion)
    this.questionText = artQuestion.questionText
    this.questionId = artQuestion._id
  }


  public saveAnswer():void{
    this.storageService.saveLocalAnswer(this.questionId, this.answer)
  }





}