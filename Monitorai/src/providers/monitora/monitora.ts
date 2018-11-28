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

  pegaDenuncia(id){
    let url = "http://monitoraai.tk/monitoraapi/denuncias/"+id.toString()+"/10745701cfafd7e0944c807accf4371fba45";

    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get(url,options);

  }

}
