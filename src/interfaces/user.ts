import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { collection, doc, getFirestore, query, setDoc, where } from 'firebase/firestore'

export interface CreateUserData{
    
  Endereco: string
  Nome: string
  Privilegio: string
  Senha: string
  Contato: string
  Email: string

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

const firestore = getFirestore();

export const createUser = async(Data:CreateUserData)=> {

  const referencia = collection(firestore, 'usuarios');

  await setDoc(doc(referencia), {
    endereco: Data.Endereco,
    nome: Data.Nome,    
    senha: Data.Senha,
    contato: Data.Contato,
    email: Data.Email
  })
}


export const buscaLogin = async (emailUsuario: string, senhaUsuario: string) => {
  
  const refLogin = collection(firestore, 'usuarios');

  const q = query(refLogin, where("email", "==", emailUsuario))
}