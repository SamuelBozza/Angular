import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public height: string = '20px';
  public backgroundColor: string = 'red';

  public nome: string = '';
  public list: Array<{ nome: string }> = [{nome: "Dener Troquatte"}];

  public date:Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome = ""
  }
}
