import {Injectable} from '@angular/core';

@Injectable()
export class UserDataProvider{

    private config = {
        name: "",
        email: "",
        image: ""
    }

    constructor(){

    }


    getConfigData(): any{
        let userdata = {
            name: "teste",
            email: "teste@teste",
            image: "teste"
        } 
        if(localStorage.getItem("config")==null){
            return userdata;
        }else {
            return localStorage.getItem("config");
        }
    }

    setConfigData(name?: string, email?: string, image?: string){
        let config = {
            name: "",
            email: "",
            image: ""
        };

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