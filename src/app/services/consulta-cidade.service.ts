import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Cidade } from 'src/app/model/cidade';

@Injectable({
  providedIn: 'root'
})

export class ConsultaCidadesService {

  constructor(private http: HttpClient) { }

  getCidades(uf: string){
    return this.http.get<Cidade[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    .pipe(
      map((cidadesIBGE) => {
        let cidadesUF: Cidade[] = new Array();
        cidadesIBGE.forEach(uf => {
          cidadesUF.push(new Cidade(uf))});
        return cidadesUF;
      })
    )
  }

}
