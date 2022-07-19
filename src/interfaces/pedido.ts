import React, { createContext, useCallback, useState, useContext, ReactNode } from "react";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../services/firebase'
import { collection, doc, Firestore, getDoc, getDocs, getFirestore, orderBy, query, QueryDocumentSnapshot, setDoc, Timestamp, updateDoc, where } from 'firebase/firestore'

export interface PedidoUser{
    nome: string;
    email: string;
    userKey: string;
    endereco: string;
}

export interface Pedido{
    pedido: string[];
    tamanho: string,
    valor: string,
    pagamento: string,
    cliente: PedidoUser
}

export interface Pedidos{
    pedidos: string[];
    tamanho: string,
    valor: string,
    pagamento: string,
    arquivado: number,
    data: Date,
    email: string,
    chave: string
    cliente: PedidoUser
}

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

export const cadastraPedido = async (Data:Pedido) => {
    const ref = collection(firestore, "pedidos");


    try {
        await setDoc(doc(ref),{
            pedido: Data.pedido,
            tamanho: Data.tamanho,
            valor: Data.valor,
            data: Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"}),
            arquivado: 0,
            cliente: {
                email: Data.cliente.email,
                nome: Data.cliente.nome,
                chave: Data.cliente.userKey,
                endereco: Data.cliente.endereco
            }
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
            pedidos: QueryDocumentSnapshot.data().pedido,       
            tamanho: QueryDocumentSnapshot.get("tamanho"),
            valor: QueryDocumentSnapshot.get("valor"),
            pagamento: QueryDocumentSnapshot.get("pagamento"),
            arquivado: QueryDocumentSnapshot.get("arquivado"),
            data: QueryDocumentSnapshot.get("data"),
            email: QueryDocumentSnapshot.get("email"),
            chave: QueryDocumentSnapshot.id,
            cliente: QueryDocumentSnapshot.get("cliente")
        };

        //console.log(docP);

        P.push(docP);
    });

    console.log(P);

    return P;
}

export const buscaPedidoByUser = async (UserKey:string): Promise<Pedidos[]> => {
    const P: Pedidos[] = [];
    const ref = collection(firestore, "pedidos");    
    const tempo =  Timestamp.now().toDate().toLocaleDateString('pt-br', {dateStyle: "long"});


    const q = query(ref,where("cliente.chave", "==", UserKey));
    const querySnapshot = await getDocs(q); 

    querySnapshot.forEach(QueryDocumentSnapshot=>{
        
        //console.log(QueryDocumentSnapshot.data());
        
        const docP:Pedidos = {     
            pedidos: QueryDocumentSnapshot.data().pedido,       
            tamanho: QueryDocumentSnapshot.get("tamanho"),
            valor: QueryDocumentSnapshot.get("valor"),
            pagamento: QueryDocumentSnapshot.get("pagamento"),
            arquivado: QueryDocumentSnapshot.get("arquivado"),
            data: QueryDocumentSnapshot.get("data"),
            email: QueryDocumentSnapshot.get("email"),
            chave: QueryDocumentSnapshot.id,
            cliente: QueryDocumentSnapshot.get("cliente")
        };

        //console.log(docP);

        P.push(docP);
    });

    return P.reverse();
}


export const mudaStatusPedido = async (chave:string, status: number) => {
    const ref = doc(firestore, "pedidos", chave);    

    await updateDoc(ref, {
        arquivado: status
    });
}

export const hasActivePedido = async (UserKey:string): Promise<Pedidos> => {
    let activePedido: Pedidos = {} as Pedidos;

    const ref = collection(firestore, "pedidos");    

    const q = query(ref, where("cliente.chave", "==", UserKey));
    const querySnapshot = await getDocs(q); 


    querySnapshot.forEach(QueryDocumentSnapshot=>{

        console.log(QueryDocumentSnapshot.get("arquivado"))

        if(QueryDocumentSnapshot.get("arquivado") < 3 ){
            const docP:Pedidos = {     
                pedidos: QueryDocumentSnapshot.data().pedido,       
                tamanho: QueryDocumentSnapshot.get("tamanho"),
                valor: QueryDocumentSnapshot.get("valor"),
                pagamento: QueryDocumentSnapshot.get("pagamento"),
                arquivado: QueryDocumentSnapshot.get("arquivado"),
                data: QueryDocumentSnapshot.get("data"),
                email: QueryDocumentSnapshot.get("email"),
                chave: QueryDocumentSnapshot.id,
                cliente: QueryDocumentSnapshot.get("cliente")
            };

            activePedido = docP;
        }
       
    });

    console.log(activePedido);

    return activePedido;
}
