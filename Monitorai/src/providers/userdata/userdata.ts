import {Injectable} from '@angular/core';

@Injectable()
export class UserDataProvider{

    public config = {
        displayName: "",
        email: "",
        imageUrl: ""
    }

    constructor(){

    }


    getConfigData():any{
    
            return localStorage.getItem("config");
    
    }

    setConfigData(name?: string, email?: string, image?: string){

        let config = {
            displayName : "",
            email: "",
            imageUrl: ""
        }
     

        if(name){
            config.displayName = name;
        }

        if(email){
            config.email = email;
        }

        if(image){
            config.imageUrl = image;
        }

        localStorage.setItem("config", JSON.stringify(config));
    }
}