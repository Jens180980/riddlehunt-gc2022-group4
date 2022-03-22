import axios from 'axios';
import { User } from '../interfaces/User.interface';



const headers = {
    "Content-Type": "application/json"
}

export async function login(user: User): Promise<any> {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa(user.email + ":" + user.password)}`
    }
    return axios.get<string>(process.env.REACT_APP_BACKEND_HOST + "/api/auth/sing-in",  { headers: headers });
}


export async function register(user: User): Promise<any> {
    const headers = {
        "Content-Type": "application/json",
    }
    return axios.post<string>(process.env.REACT_APP_BACKEND_HOST + "/api/auth/sing-up", user, { headers: headers });
}