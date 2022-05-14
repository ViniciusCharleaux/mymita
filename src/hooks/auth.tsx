import React, { createContext, useCallback, useState, useContext, ReactNode } from "react";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore'
import md5 from 'md5';


interface AuthContextType { 
    user: User | undefined;
    signIn: (params: LoginData) => Promise<void>;
}

interface User {
    Key:string  
    Endereco: string
    Nome: string
    Privilegio: string
    Contato: string
}
  
interface AuthContextProviderProps {
    children: ReactNode;
}

interface LoginData {
    email: string;
    password: string;
}

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
  

const AuthContext = createContext({} as AuthContextType);



function AuthContextProvider(props: AuthContextProviderProps) {


    const [user, setUser] = useState<User>();


    const signIn = useCallback(async (data: LoginData) => {


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

        querySnapshot.forEach(doc => {

            console.log(doc.data());

              loginUser = {
                Contato: '',
                Endereco: '',
                Key: md5(doc.id),
                Nome: doc.data().nome,
                Privilegio: '1',
              }

            console.log(loginUser)
            alert(loginUser.Key)

        });

        if(loginUser.Key !== ''){
          //mensagem de sucesso

          // localStorage.setItem('@Portal:token', );
          localStorage.setItem('@MyMita:user', JSON.stringify(loginUser));
        }
      
      
      }, []);

      return (
        <AuthContext.Provider value={{ 
            user,
            signIn,
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