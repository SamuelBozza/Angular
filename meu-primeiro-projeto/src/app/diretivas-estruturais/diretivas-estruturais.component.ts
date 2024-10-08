import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Dener Troquatte', idade: 29 },
    { nome: 'Jose', idade: 13 },
    { nome: 'Isabel', idade: 55 },
  ];

  public nome: string = 'dener';
  
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public onClick() {
    if (this.condition) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public OnClickAddList() {
    this.list.push({ nome: 'Nay', idade: 31 });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }
}
