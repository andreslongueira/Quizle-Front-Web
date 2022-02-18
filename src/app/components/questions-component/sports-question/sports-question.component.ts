import { Component, OnInit } from '@angular/core';
import { QuestionAdminService } from '../../../services/question.admin.service';

@Component({
  selector: 'app-sports-question',
  templateUrl: './sports-question.component.html',
  styleUrls: ['./sports-question.component.css']
})
export class SportsQuestionComponent implements OnInit {

  public lista: any[] = []
  public listaImp: any[] = []
  public pregunta: string = ""


  constructor(private questionAdminService: QuestionAdminService) { }

  ngOnInit(): void {
    this.getDayQuestions()
  }


  public getDayQuestions():void{
    this.questionAdminService.getQuestions().subscribe(res => {
      if (res.resp == "ok") {
        this.lista = res.allDayQuestions
        
        this.lista.forEach(i => {
          this.listaImp.push(i.questions)
        });

       this.pregunta = this.listaImp[this.listaImp.length-1].sportsQuestion.questionText

        
      } else {
        console.log(res.text);
      }
    }, err => {
      console.log(err);
    })

  }
}
