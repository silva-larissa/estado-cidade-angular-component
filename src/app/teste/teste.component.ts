import { Component, OnInit } from '@angular/core';
import { Cidade } from '../model/cidade';
import { Estado } from '../model/estado';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  constructor(){
  }

  logradouro: string = '';
  estado: Estado = new Estado();
  cidade: Cidade = new Cidade();

  ngOnInit(): void {
    //this.estado.id = 12;
    //this.estado.sigla = 'AC';
    //this.estado.nome = 'Acre';
  }

}
