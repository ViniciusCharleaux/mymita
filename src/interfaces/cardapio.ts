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

const cadastraPedido = async (Data:cardapios) => {
    const ref = collection(firestore, "cardapios");


    try {
        await setDoc(doc(ref, (Timestamp.fromDate(new Date()).toString())),{
            guarnicao: Data.Guarnicao,
            mistura: Data.Mistura,
            salada: Data.Mistura
        })
        
        return 1
                
    } catch (err) {
        console.log(err)
    return 2
    }
}

const buscaPedido = async (Data:cardapios) => {
    const ref = collection(firestore, "pedidos");

    const q = query(ref, where("[.key]", "==", Timestamp.now()));
      
    const querySnapshot = await getDocs(q); 

}

        

