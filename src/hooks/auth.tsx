import React, { createContext, useCallback, useState, useContext, ReactNode, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore'
import md5 from 'md5';

import { CreateUserData } from '../interfaces/user'
import { useNavigate } from "react-router-dom";

interface AuthContextType { 
    user: User | undefined;
    signIn: (params: LoginData) => Promise<Boolean>;
    logOut: () => Boolean;
    updateLogin: () => void;
    createUser: (params: CreateUserData) => Promise<Number>
}


export interface User {
    Key:string  
    Endereco: string
    Nome: string
    Privilegio: string
    Contato: string
}
  
interface AuthContextProviderProps {
    children: ReactNode;
}

interface Token{
  token: string
}

interface LoginData {
    email: string;
    password: string;
}

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
  

const AuthContext = createContext({} as AuthContextType);



function AuthContextProvider(props: AuthContextProviderProps) {
  
  useEffect(() => {
    updateLogin()
  },[])

    const [user, setUser] = useState<User>();


    const signIn = async (data: LoginData) => {

      const refLogin = collection(firestore, 'usuarios');
      const q = query(refLogin, where("email", "==", data.email), where("senha", "==", data.password));

      const querySnapshot = await getDocs(q);      

      let loginUser:User = {
        Contato: '',
        Endereco: '',
        Key: '',
        Nome: '',
        Privilegio: '1',
    }

    let token:Token = {
      token: ''
    }

      querySnapshot.forEach(doc => {

            loginUser = {
              Contato: '',
              Endereco: '',
              Key: doc.id,
              Nome: doc.data().nome,
              Privilegio: doc.data().privilegio || '1',
            }

            setUser(loginUser)

            token.token = md5(loginUser.Key)

      });

      if(loginUser.Key !== ''){
        //mensagem de sucesso
        // localStorage.setItem('@MyMita:token', );
        localStorage.setItem('@MyMita:user', JSON.stringify(loginUser));
        localStorage.setItem('@MyMita:token', JSON.stringify(token));
        return true;

      }else{
        return false
      }
    
    };


      const updateLogin = (() => {

        const user = localStorage.getItem("@MyMita:user");
        const token = localStorage.getItem("@MyMita:token");

        if(user && token){


          if(md5(JSON.parse(user).Key),JSON.parse(token).token){
            setUser(JSON.parse(user))
          }else{
            console.log(md5(JSON.parse(user).Key),JSON.parse(token).token)
            throw new Error('Token inválido')
          }
        }
      })


      const logOut = useCallback(() => {

        localStorage.removeItem('@MyMita:user');
        setUser(undefined)
        return true

      }, []);



      const createUser = async ( Data:CreateUserData )=> {

        const ref = collection(firestore, 'usuarios');

        const q = query(ref, where("email", "==", Data.Email));
        const querySnapshot = await getDocs(q);  
        
        if(querySnapshot.size > 0){

          return 0;

        }else{

          try {
      
            await setDoc(doc(ref), {
              endereco: Data.Endereco,
              nome: Data.Nome,    
              senha: Data.Senha,
              contato: Data.Contato,
              email: Data.Email,
              privilegio: Data.Privilegio,
            })
        
            await signIn({email: Data.Email, password: Data.Senha})
  
            return 1
            
          } catch (err) {
              console.log(err)
            return 2
          }
        }

      }
      


      return (
        <AuthContext.Provider value={{ 
            user,
            signIn,
            logOut,
            updateLogin,
            createUser
          }}>
          {props.children}
        </AuthContext.Provider>
      );
}

function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }

  export {AuthContextProvider, useAuth}