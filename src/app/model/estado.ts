export class Estado {

  id?: number;
  sigla?: string;
  nome?: string;

  constructor(estado?: any){

    if(estado){
      this.id = estado.id;
      this.sigla = estado.sigla;
      this.nome = estado.nome;
    }

  }

  getDisplayValue(){
    //return this.id + ' - ' + this.sigla + ' - ' + this.nome;
    return this.nome;
  }

}
