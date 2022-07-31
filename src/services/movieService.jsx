import http from "./httpService";
import config from "../components/config.json";

export function getMovies() {
    return http.get(config.apiEndPoint + "movies");
  }

export function deleteMovie(movieId){
    return http.delete(config.apiEndPoint + "movies/" + movieId);
}

export function getMovie(id) {
    return http.get(config.apiEndPoint + "movies/" + id);
    }

export function saveMovie(movie) {
    if(movie._id){
        const body = {...movie};
        delete body._id;
        return http.put(config.apiEndPoint + "movies/" + movie._id, body);
    }
    return http.post(config.apiEndPoint + "movies", movie);
}