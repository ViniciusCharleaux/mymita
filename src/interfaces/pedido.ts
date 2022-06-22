import React, { createContext, useCallback, useState, useContext, ReactNode } from "react";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { collection, doc, Firestore, getDoc, getDocs, getFirestore, query, QueryDocumentSnapshot, setDoc, Timestamp, updateDoc, where } from 'firebase/firestore'

export interface Pedido{
    Guarnicao: string,
    Mistura: string,
    Salada: string,
    Tamanho: string,
    Valor: string,
    Arquivado: number,
    Email: string
}

interface Pedidos{
    Guarnicao: string,
    Mistura: string,
    Salada: string,
    Tamanho: string,
    Valor: string,
    Arquivado: number,
    Data: Date,
    Email: string,
    Chave: string
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
            data: Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"}),
            arquivado: 0,
            email: Data.Email
        })
        
        return 1
                
    } catch (err) {
        console.log(err)
    return 2
    }
}

export const buscaPedido = async (): Promise<Pedidos[]> => {
    const P: Pedidos[] = [];
    
    const ref = collection(firestore, "pedidos");    

    const tempo =  Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"});

    const q = query(ref, where("data", "==", tempo));
      
    const querySnapshot = await getDocs(q); 

    //console.log(querySnapshot);

    querySnapshot.forEach(QueryDocumentSnapshot=>{
        
        //console.log(QueryDocumentSnapshot.data());
        
        const docP:Pedidos = {            
            Guarnicao: QueryDocumentSnapshot.get("guarnicao"),
            Mistura: QueryDocumentSnapshot.get("mistura"),
            Salada: QueryDocumentSnapshot.get("salada"),
            Tamanho: QueryDocumentSnapshot.get("tamanho"),
            Valor: QueryDocumentSnapshot.get("valor"),
            Arquivado: QueryDocumentSnapshot.get("arquivado"),
            Data: QueryDocumentSnapshot.get("data"),
            Email: QueryDocumentSnapshot.get("email"),
            Chave: QueryDocumentSnapshot.get("[.key]")
        };

        //console.log(docP);

        P.push(docP);
    });

    console.log(P);

    return P;
}

export const arquivaPedido = async (Chave:string) => {
    const ref = doc(firestore, "pedidos", Chave);    

    await updateDoc(ref, {
        arquivado: 1
    });
}

export const aceitaPedido = async (Chave:string) => {
    const ref = doc(firestore, "pedidos", Chave);    

    await updateDoc(ref, {
        arquivado: 2
    });
}