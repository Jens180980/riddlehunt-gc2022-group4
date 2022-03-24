import axios from 'axios';
import { REACT_APP_BACKEND_HOST } from '../Config/config.env';
import { User } from '../interfaces/User.interface';



class LoginService {
    
    static LoginService: LoginService;

    static getCategoryService() {
        if (!this.LoginService)
            this.LoginService = new LoginService();

        return this.LoginService;
    }



async login(user: User): Promise<any> {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa(user.email + ":" + user.password)}`
    }
    return axios.post<string>(REACT_APP_BACKEND_HOST + "/api/auth/sign-in",{}, { headers: headers });
}


async register(user: User): Promise<any> {
    const headers = {
        "Content-Type": "application/json",
    }
    return axios.post<string>(REACT_APP_BACKEND_HOST + "/api/auth/sign-up", JSON.stringify(user), { headers: headers });
}
}
export default LoginService;