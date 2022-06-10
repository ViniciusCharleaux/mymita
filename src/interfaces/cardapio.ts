import React, { createContext, useCallback, useState, useContext, ReactNode } from "react";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, Timestamp, where } from 'firebase/firestore'

export interface Cardapio{
    Guarnicao: string,
    Mistura: string,
    Salada: string
}


const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

export const cadastraCardapio = async (Data:Cardapio) => {
    const ref = collection(firestore, "cardapios");


    try {
        await setDoc(doc(ref),{
            guarnicao: Data.Guarnicao,
            mistura: Data.Mistura,
            salada: Data.Salada,
            data: Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"})
        })
        
        return 1
                
    } catch (err) {
        console.log(err)
    return 2
    }
}

export const buscaCardapio = async () => {
    const ref = collection(firestore, "cardapios");

    const tempo =  Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"});

    const q = query(ref, where("data", "==", tempo));
      
    const querySnapshot = await getDocs(q); 

    //querySnapshot.forEach(QueryDocumentSnapshot=> console.log(QueryDocumentSnapshot.data()));
}

        

