import prismaClient from "../../prisma";


interface OrderRequest{
    id_pedido: string;
}

class DetailOrderService{
    async execute ({id_pedido}:OrderRequest){
        const order = prismaClient.pedido.findFirst({
            where:{
                id: id_pedido
            }
        });

        return {...(await order), items: (await order.items())};
    }
}

export{DetailOrderService}