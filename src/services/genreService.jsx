import http from "./httpService" ;
import config from "../components/config.json";

const apiEndpoint = "/genres";

export function getGenres() {
   return http.get(apiEndpoint);
}