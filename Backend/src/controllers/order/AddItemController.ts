import { Request, Response} from 'express';
import {AddItemService } from '../../services/order/AddItemService'

class AddItemController{
    async handle(req: Request, res: Response){
        const {quantidade, id_pedido, id_produto} = req.body;
        const addItemService = new AddItemService();
        const order = await addItemService.execute({quantidade, id_pedido, id_produto});
        return res.json(order);
    }
}

export {AddItemController}