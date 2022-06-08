import React, { createContext, useCallback, useState, useContext, ReactNode } from "react";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { collection, doc, getDoc, getDocs, getFirestore, query, QueryDocumentSnapshot, setDoc, Timestamp, where } from 'firebase/firestore'

export interface Pedido{
    Guarnicao: string,
    Mistura: string,
    Salada: string,
    Tamanho: string,
    Valor: string   
}


const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

export const cadastraPedido = async (Data:Pedido) => {
    const ref = collection(firestore, "pedidos");


    try {
        await setDoc(doc(ref),{
            guarnicao: Data.Guarnicao,
            mistura: Data.Mistura,
            salada: Data.Salada,
            tamanho: Data.Tamanho,
            valor: Data.Valor,
            data: Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"})
        })
        
        return 1
                
    } catch (err) {
        console.log(err)
    return 2
    }
}

export const buscaPedido = async () => {
    const ref = collection(firestore, "pedidos");    

    const tempo =  Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"});

    const q = query(ref, where("data", "==", tempo));
      
    const querySnapshot = await getDocs(q); 

    //querySnapshot.forEach(QueryDocumentSnapshot=> console.log(QueryDocumentSnapshot.data()));
}