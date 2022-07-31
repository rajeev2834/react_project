import http from "./httpService";
import config from "../components/config.json";

export function login(email, password){
    return http.post(config.apiEndPoint + "auth" , {email, password});
}