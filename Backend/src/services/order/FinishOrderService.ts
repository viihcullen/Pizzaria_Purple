import prismaClient from "../../prisma";


interface FinishOrderRequest{
    id_pedido: string;
}

class FinishOrderService{
    async execute ({id_pedido}:FinishOrderRequest){
       
        const finishOrder = await prismaClient.pedido.update({
           where:{
            id: id_pedido

           },
            data:{
                status : true
            }
        });
        const itemsOrder = await prismaClient.item.findMany({
            where:{
                id_pedido : id_pedido
            }
        });
        let soma = 0;
        for(let i = 0; i < itemsOrder.length; i++){
            const produto = await prismaClient.produto.findFirst({
                where :{
                    id: itemsOrder[i].id_produto
                }
            })
            soma += itemsOrder[i].quantidade*Number(produto.preco);
        }
        return {
            ...finishOrder, items:itemsOrder, total: soma
        }

       
    }
}

export{FinishOrderService}