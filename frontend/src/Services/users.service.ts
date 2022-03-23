import axios from 'axios';
import { REACT_APP_BACKEND_HOST } from '../Config/config.env';
import {User} from '../interfaces/User.interface';
class UsersService {
    
    static UsersService: UsersService;

    static getUsersService() {
        if (!this.UsersService)
            this.UsersService = new UsersService();

        return this.UsersService;
    }


    async getUsers():Promise<any>{
        return axios.get<User[]>(REACT_APP_BACKEND_HOST+"/user")
    }

    async getUserById(id:number):Promise<any>{
        return axios.get<User>(REACT_APP_BACKEND_HOST+"/user/"+id);
    }

    async putUser(user:User):Promise<any>{
        return axios.put<any>(REACT_APP_BACKEND_HOST+"/user/"+user.id,JSON.stringify(user));
    }

    async deleteUserById(id:number):Promise<any>{
        return axios.delete<any>(REACT_APP_BACKEND_HOST+"/user/"+id);
    }


    //methods
}
export default UsersService;