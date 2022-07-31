import http from "./httpService" ;
import config from "../components/config.json";

export function getGenres() {
    console.log(config.apiEndPoint + "genres");
   return http.get(config.apiEndPoint + "genres");
}