import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore'
import {useAuth} from '../hooks/auth'


export interface CreateUserData{
    
  Endereco: string
  Nome: string
  Privilegio: string
  Senha: string
  Contato: string
  Email: string

}

export interface UserData{

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

  const {signIn} = useAuth()

  try {

    await setDoc(doc(referencia), {
      endereco: Data.Endereco,
      nome: Data.Nome,    
      senha: Data.Senha,
      contato: Data.Contato,
      email: Data.Email
    })

    await signIn({email: Data.Email, password: Data.Senha})
    
  } catch (err) {
    alert(err)
  }

 
}
