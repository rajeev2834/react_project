import http from "./httpService";
import config from "../components/config.json";

export function register(user) {
  return http.post(config.apiEndPoint + "users",{
    email:  user.username,
    password: user.password,
    name: user.name
  });
}