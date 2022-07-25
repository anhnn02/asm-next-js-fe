
import instance from "./instance";

export const signup = (user) => {
    return instance.post("/register", user);
}
export const list = (url) => {
    return instance.get(url);
}
export const signin= (user)=>{
    return instance.post("/users",user);
}