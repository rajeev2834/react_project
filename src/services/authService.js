import http from "./httpService";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

const apiEndpoint = "/auth";

http.setJwt(localStorage.getItem(tokenKey));

export async function login(email, password){
 const {data:jwt} = await http.post(apiEndpoint , {email, password});
 localStorage.setItem(tokenKey, jwt);
 toast.success("Logged in successfully");
}

export function loginWithJwt(jwt){
 localStorage.setItem(tokenKey, jwt);
}

export function logout(){
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){
    const jwt = localStorage.getItem(tokenKey);
    if(!jwt) return null;
    return jwtDecode(jwt);
}

export function getJwt(){
    return localStorage.getItem(tokenKey);
}

export default {
    login, 
    logout,
    getCurrentUser,
    loginWithJwt,
    getJwt
};