import {Injectable} from '@angular/core';

@Injectable()
export class UserDataProvider{

    public config = {
        name: "",
        email: "",
        image: ""
    }

    constructor(){

    }


    getConfigData():any{
    
            return localStorage.getItem("config");
    
    }

    setConfigData(name?: string, email?: string, image?: string){

        let config = {
            name : "",
            email: "",
            image: ""
        }
     

        if(name){
            config.name = name;
        }

        if(email){
            config.email = email;
        }

        if(image){
            config.image = image;
        }

        localStorage.setItem("config", JSON.stringify(config));
    }
}