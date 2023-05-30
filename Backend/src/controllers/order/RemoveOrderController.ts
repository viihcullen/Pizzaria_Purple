import { Request, Response} from 'express';
import { RemoveOrderService } from '../../services/order/RemoveOrderService'

class RemoveOrderController{
    async handle(req: Request, res: Response){
        const id_pedido = req.query.id_pedido as string;
        const removeOrderService = new RemoveOrderService();
        const order = await removeOrderService.execute({id_pedido});
        return res.json(order);
    }
}

export {RemoveOrderController}