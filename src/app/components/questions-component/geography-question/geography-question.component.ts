import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-geography-question',
  templateUrl: './geography-question.component.html',
  styleUrls: ['./geography-question.component.css']
})
export class GeographyQuestionComponent implements OnInit {

 
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
