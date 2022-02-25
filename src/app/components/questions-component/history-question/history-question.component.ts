import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-history-question',
  templateUrl: './history-question.component.html',
  styleUrls: ['./history-question.component.css']
})
export class HistoryQuestionComponent implements OnInit {

 
  public pregunta: string = ""
  public questionId: string = ""
  public answer: Boolean = false
  public postion: number = 0


  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.getQuestion()
  }


  public getQuestion():void{
  
  }

  public getQuestionId(){
  }


  public saveAnswer():void{
    this.storageService.saveLocalAnswer(this.questionId,this.answer)
  }




}
