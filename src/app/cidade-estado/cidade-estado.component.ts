import { TesteComponent } from './../teste/teste.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { ConsultaEstadoService } from '../services/consulta-estado.service';
import { ConsultaCidadesService } from '../services/consulta-cidade.service';
import { Estado } from '../model/estado';
import { Cidade } from '../model/cidade';

@Component({
  selector: 'app-cidade-estado',
  templateUrl: './cidade-estado.component.html',
  styleUrls: ['./cidade-estado.component.scss'],
  providers: [ConsultaEstadoService]
})

export class CidadeEstadoComponent implements OnInit {

  estados!: DataSource;
  cidades: Array<Cidade> = [];

  private _estado?: Estado;

  @Input()
  get estado(): Estado {
    return this._estado ? this._estado : new Estado();
  }
  set estado(value: Estado){
    this._estado = value;
    this.estadoChange.emit(value);
  }

  @Input()
  cidade?: Cidade;

  @Output()
  estadoChange: EventEmitter<Estado> = new EventEmitter<Estado>();
  cidadeChange: EventEmitter<Cidade> = new EventEmitter<Cidade>();

  constructor(
    private estadoService: ConsultaEstadoService,
    private cidadeService: ConsultaCidadesService){
  }

  ngOnInit(){

    this.estadoService.getEstados().subscribe(uf => {
      this.estados = new DataSource({
        store:
        {
          type: "array",
          key: "id",
          data: uf
        }
      })
    })

  }

  listarCidades(ev: any) {
    this.estadoChange.emit(ev.selectedItem);
    const uf = ev.selectedItem.sigla;
    return this.cidadeService
      .getCidades(uf)
      .subscribe(resultado => {this.cidades = resultado});
  }

  getCidadeSelecionada (ev: any){
    this.cidadeChange.emit(ev.selectedItem);
    const cidadeSelecionada = ev.selectedItem.nome;
    console.log(cidadeSelecionada);
    return cidadeSelecionada;
  }

}
