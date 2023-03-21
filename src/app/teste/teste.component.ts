import { CidadeEstadoComponent } from './../cidade-estado/cidade-estado.component';
import { Component, Input, OnInit } from '@angular/core';
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

  estado: Estado = new Estado();
  cidade: Cidade = new Cidade();

  //@Input()
  //cidadeSelecionada!: CidadeEstadoComponent;

  ngOnInit(): void {
    //this.estado.id = 12;
    //this.estado.sigla = 'AC';
    //this.estado.nome = 'Acre';
  }

}
