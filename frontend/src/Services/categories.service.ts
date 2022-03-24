import axios from 'axios';
import { REACT_APP_BACKEND_HOST } from '../Config/config.env';
import { Category } from '../interfaces/Category.interface';

class CategoriesService {

    static CategoriesService: CategoriesService;

    static getCategoriesService() {
        if (!this.CategoriesService)
            this.CategoriesService = new CategoriesService();

        return this.CategoriesService;
    }


    async getAllCategories(): Promise<any> {
        return axios.get<Category[]>(REACT_APP_BACKEND_HOST + "/category");
    }

    async createCategory(category: Category) : Promise<any>{
        return axios.post<Category>(REACT_APP_BACKEND_HOST + "/category", JSON.stringify(category))
    }

    async updateCategory(category: Category): Promise<any>{
        return axios.put<any>(REACT_APP_BACKEND_HOST+"/category/"+category.id)
    }

    async deleteCategoryById(id: number): Promise<any>{
        return axios.delete<any>(REACT_APP_BACKEND_HOST+"/category/"+id)
    }



    //methods
}
export default CategoriesService;