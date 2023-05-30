import { Request, Response} from 'express';
import { DetailOrderService } from '../../services/order/DetailOrderService'

class DetailOrderController{
    async handle(req: Request, res: Response){
        const id_pedido = req.query.id_pedido as string;
        const detailOrderService = new DetailOrderService();
        const order = await detailOrderService.execute({id_pedido});
        return res.json(order);
    }
}

export {DetailOrderController}