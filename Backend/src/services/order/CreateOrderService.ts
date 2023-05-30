import prismaClient from "../../prisma";

interface OrderRequest{
    mesa:number;
    nome: string;

}

class CreateOrderService{
    async execute({mesa, nome}: OrderRequest){
        if(!mesa){
            throw new Error("Número da mesa obrigatório!")
        }

        const order = prismaClient.pedido.create({
            data:{
                mesa: mesa,
                nome: nome
            }
        })
        return order;
    }
}

export {CreateOrderService}