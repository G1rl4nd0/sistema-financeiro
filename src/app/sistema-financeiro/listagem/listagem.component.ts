import {  Component, OnInit, } from '@angular/core';


@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  dataSource: any;

  dataSystems: any[] = [
    {
      Id: '1',
      Nome: 'Admin',

    },
    {
      Id: '2',
      Nome: 'Vendedor',

    },
    {
      Id: '3',
      Nome: 'Contador',

    },
    {
      Id: '4',
      Nome: 'Suporte',

    },
  ];

  click() {
    alert('oi')
  }
  
  constructor() {}

  ngOnInit(): void {}



}
