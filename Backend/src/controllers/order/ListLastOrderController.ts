import {Request, Response} from "express";
import { ListLastOrderService } from "../../services/order/ListLastOrderService";

class ListLastOrderController{
    async handle(req: Request, res: Response){
        const listLastOrderService = new ListLastOrderService();
        const order = await listLastOrderService.execute();

        return res.json(order);
    }
}

export{ListLastOrderController}