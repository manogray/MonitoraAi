import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MonitoraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MonitoraProvider {

  constructor(public http: HttpClient) {
  }

  novaDenuncia(postData){
    let url = "http://monitoraai.tk/monitoraapi/denuncias/10745701cfafd7e0944c807accf4371fba45";

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(postData);
    return this.http.post(url,postData,options);
  }

  novaAvaliacao(postData){
    let url = "http://monitoraai.tk/monitoraapi/avaliacoes/10745701cfafd7e0944c807accf4371fba45";

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(postData);
    return this.http.post(url,postData,options);
  }

  pegaDenuncia(id){
    let url = "http://monitoraai.tk/monitoraapi/denuncias/"+id.toString()+"/10745701cfafd7e0944c807accf4371fba45";

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get(url,options);

  }

  cadastrarUsuario(displayName,email){
    let url = "http://monitoraai.tk/monitoraapi/usuarios/10745701cfafd7e0944c807accf4371fba45";
    let usuario = {
      displayName: displayName,
      email: email
    }
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    if(!this.temConta(email)){
      return this.http.post(url,usuario,options);
    }else {
      return null;
    }
    
  }

  temConta(email){
    let url = "http://monitoraai.tk/monitoraapi/usuarios/"+email+"/10745701cfafd7e0944c807accf4371fba45";

    let Retorne = false

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.get(url,options).subscribe(
      data=>{
        let retorno = (data as any);
        let objeto = retorno._body;
        if(objeto.email != "pintassilgo"){
          Retorne = true;
        }
      }, error=>{

      }
    );

    return Retorne;
  }

}
