import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { getDatabase, push, ref, set } from "firebase/database";

export interface CreateUserData{

    Contato: string
    Endereco: string
    Nome: string
    Privilegio: string
    Senha: string
    Usuario: string

}

const app = initializeApp(firebaseConfig);

const database = getDatabase();

export const createUser = async(Data:CreateUserData) => {
  
  push(ref(database, '/Usuarios'), {
    Contato: Data.Contato,
    Endereco: Data.Endereco,
    Nome: Data.Nome,
    Privilegio: Data.Privilegio,
    Senha: Data.Senha,
    Usuario: Data.Usuario 
  });


}