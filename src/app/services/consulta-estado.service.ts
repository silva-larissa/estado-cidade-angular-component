import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Estado } from 'src/app/model/estado';

@Injectable({
  providedIn: 'root'
})

export class ConsultaEstadoService {

  private readonly url_API_estados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
  constructor(private http: HttpClient) { }

  getEstados(){
    return this.http.get<Estado[]>(this.url_API_estados)
    .pipe(
      map(estadosIBGE => {
        let estadosBr: Estado[] = new Array();
        estadosIBGE.forEach(uf => {
          estadosBr.push(new Estado(uf))});
        return estadosBr;
      })
    )
  }

}
