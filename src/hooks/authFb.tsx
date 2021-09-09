 import React, { createContext, useContext, useState } from "react";
import { ReactNode } from "react";


 type User = {
    id: string;
    username: string;
    fisrtName: string;
    avatar: string;
    email: string;
    token: string;
 }
 import * as AuthSession from 'expo-auth-session';
 import firebase from "../services/firebase/api";

 import {SCOPE,
        CLIENT_ID,
        CDN_IMAGE,
        REDIRECT_URI,
        RESPONSE_TYPE
    } from '../config';
    
import { api } from "../services/api";
 type AuthContextData ={
     user: User;
     signIn: () => Promise<void>;
 }
 type AuthProviderProps = {
     children: ReactNode;
 }
 export const AuthContext = createContext({} as AuthContextData);
 function AuthProvider({children}: AuthProviderProps){
    const database = firebase.firestore();
    const [user, setUser] = useState<User>({
    } as User);
    const [loading, setLoading] = useState(false);
    async function signIn (){
        try {
            setLoading(true);
            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
           const response = AuthSession.startAsync({authUrl})
            console.log(response);
        } catch {
            throw new Error('Não foi possível conectar!');
        }
    }
    return (
        <AuthContext.Provider value={{
            user,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
 }

 function useAuth(){
    const context = useContext(AuthContext);

    return context;
 }

 export {
     AuthProvider,
     useAuth
 }