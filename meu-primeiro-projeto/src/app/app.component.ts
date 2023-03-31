import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-title *ngIf="alterar"></app-title>
    <br />
    <button (click)="destruirComponent()">Destruir componente</button>
    <button (click)="adicionarComponent()">Adicionar componente</button>
    <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  public alterar: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  public destruirComponent() {
    this.alterar = false;
  }

  public adicionarComponent() {
    this.alterar = true;
  }
}
