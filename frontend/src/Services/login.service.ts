import axios from 'axios';


export interface User{
    name:string;
    email:string;
    password:string;
}

const headers={
    "Content-Type":"application/json"
}

export async function login(user:string):Promise<any>{
   return axios.post<string>(process.env.REACT_APP_BACKEND_HOST+"/api/auth/sing-in",user,{headers: headers});
}