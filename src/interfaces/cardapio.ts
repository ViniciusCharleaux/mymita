import React, { createContext, useCallback, useState, useContext, ReactNode } from "react";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, Timestamp, where } from 'firebase/firestore'

interface cardapios{
    Guarnicao: string,
    Mistura: string,
    Salada: string
}


const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

export const cadastraPedido = async (Data:cardapios) => {
    const ref = collection(firestore, "cardapios");


    try {

        const time = Timestamp.fromDate(new Date())

        console.log(time)

        await setDoc(doc(ref, Timestamp.fromDate(new Date()).toDate().toLocaleDateString('pt-br', {dateStyle: "long"})),{
            guarnicao: Data.Guarnicao,
            mistura: Data.Mistura,
            salada: Data.Salada
        })
        
        return 1
                
    } catch (err) {
        console.log(err)
    return 2
    }
}

export const buscaPedido = async (Data:cardapios) => {
    const ref = collection(firestore, "pedidos");

    const tempo =  Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"});

    const q = query(ref, where("[.key]", "==", tempo));
      
    const querySnapshot = await getDocs(q); 

    console.log(querySnapshot)

}

        

