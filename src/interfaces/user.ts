import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { child, get, getDatabase, push, ref, set } from "firebase/database";

export interface CreateUserData{
    
    Endereco: string
    Nome: string
    Privilegio: string
    Senha: string
    Contato: string

}

interface UserData{

  Key:string  
  Endereco: string
  Nome: string
  Privilegio: string
  Senha: string
  Contato: string

}


const app = initializeApp(firebaseConfig);

const database = getDatabase();

export const createUser = async(Data:CreateUserData, Email:string)=> {
  
  set(child(ref(database), Email), {    
    Endereco: Data.Endereco,
    Nome: Data.Nome,
    Privilegio: Data.Privilegio,
    Senha: Data.Senha,
    Contato: Data.Contato 
  });

}

const recebeUser = async (Email:string, Senha:string):Promise<UserData> => {

  var returnData:UserData = {
    Key: "",
    Endereco: "",
    Nome: "",
    Privilegio: "",
    Senha: "",
    Contato: ""
};

  get(child(ref(database), `/Usuarios/${Email}`)).then((snapshot) => {        

    if (snapshot.exists()) {
      
      if(Senha === snapshot.val().Senha){

        returnData = {

            Key: Email,
            Endereco: snapshot.val().Endereco,
            Nome: snapshot.val().Nome,
            Privilegio: snapshot.val().Privilegio,
            Senha: snapshot.val().Senha,
            Contato: snapshot.val().Contato

        }
        
        return returnData;
      }

      snapshot.val();
    } else {
      console.log("No data available");
      
    }
  }).catch((error) => {
    console.error(error);
  });  

  return returnData;

}
