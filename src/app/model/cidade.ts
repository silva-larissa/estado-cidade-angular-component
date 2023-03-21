export class Cidade {

  id?: number;
  nome?: string;

  constructor(cidade?: any){

    if(cidade){
      this.id = cidade.id;
      this.nome = cidade.nome;
    }

  }

  getDisplayValue(){
    return this.nome;
  }

}
