import { Request, Response} from 'express';
import { CreateOrderService } from '../../services/order/CreateOrderService'

class CreateOrderController{
    async handle(req: Request, res: Response){
        const {mesa, nome} = req.body;
        const createOrderService = new CreateOrderService();
        const order = await createOrderService.execute({mesa, nome});
        return res.json(order);
    }
}

export {CreateOrderController}