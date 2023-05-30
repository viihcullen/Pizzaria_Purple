import prismaClient from "../../prisma";

interface OrderRequest{
    id_pedido: string;
}

class SendOrderService{
    async execute({id_pedido}: OrderRequest){
        const order = await prismaClient.pedido.update({
            where:{
                id: id_pedido
            },
            data:{
                rascunho : false
            }
        })
        return order;
    }
}
export {SendOrderService}