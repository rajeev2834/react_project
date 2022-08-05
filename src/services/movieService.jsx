import http from "./httpService";
import config from "../components/config.json";

const apiEndpoint = "/movies";

export function getMovies() {
    return http.get(apiEndpoint);
  }

export function deleteMovie(movieId){
    return http.delete(apiEndpoint + "/" + movieId);
}

export function getMovie(id) {
    return http.get(apiEndpoint + "/" + id);
    }

export function saveMovie(movie) {
    if(movie._id){
        const body = {...movie};
        delete body._id;
        return http.put(apiEndpoint + "/" + movie._id, body);
    }
    return http.post(apiEndpoint, movie);
}