import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-science-question',
  templateUrl: './science-question.component.html',
  styleUrls: ['./science-question.component.css']
})
export class ScienceQuestionComponent implements OnInit {
  
  public pregunta: String = ""
  public questionId: String = ""
  public answer: Boolean = false
  public postion: number = 0


  constructor(private storageService: StorageService, private ScienceQuestion: Question) { }

  ngOnInit(): void {
    this.getQuestion()
  }


  public getQuestion():void{
    this.ScienceQuestion = this.storageService.getItemQuestion(this.postion)
  }


  public saveAnswer():void{
    this.storageService.saveLocalAnswer(this.ScienceQuestion._id, this.answer)
  }




}
