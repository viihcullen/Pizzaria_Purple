import { Request, Response} from 'express';
import { ListByCategoryService } from '../../services/product/ListByCategoryService'

class ListByCategoryController{
    async handle(req: Request, res: Response){
        const id_categoria = req.query.id_categoria as string;
        const listByCategory = new ListByCategoryService();
        const product = await listByCategory.execute({id_categoria});
        return res.json(product);
    }
}

export {ListByCategoryController}



