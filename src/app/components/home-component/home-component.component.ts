import { Component, OnInit } from '@angular/core';
import { dayQuestions } from 'src/app/models/question.model';
import { QuestionService } from 'src/app/services/question.service';
import { RulesService } from 'src/app/services/rules.service';
import { StorageService } from 'src/app/services/storage.service';



@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  public lista: any[] = []
  public listaImp: any[] = []
  public pregunta: string = ""
  

  constructor(private rulesService : RulesService, private storageService : StorageService, private questionService : QuestionService) { }

  ngOnInit(): void {
    this.storageService.limpiarStorage()
    this.getRules()
    this.getQuestionAPI()
  }

  
  public getRules():void{
    this.rulesService.getRules().subscribe(res => {
      if (res.resp == "ok") {
        this.lista = res.rules
      } else {
        console.log(res.text);
      }
    }, err => {
      console.log(err);
    })

  }

  public getQuestionAPI():void{
    this.questionService.getQuestions().subscribe(res => {
      if (res.resp == "ok") {
        var questions: dayQuestions = { questions : res.questions }
        this.saveLocalQuestions(questions)
      } else {
        console.log(res.error);
      }
    }, err => {
      console.log(err);
    })
 
  }

  public saveLocalQuestions(questions: dayQuestions):void{
    this.storageService.saveLocalQuestion(questions)
  }


}
