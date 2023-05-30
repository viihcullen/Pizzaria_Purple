import prismaClient from "../../prisma";



interface ItemRequest{
    id_item: string;
}
class RemoveItemService{
    async execute({id_item}: ItemRequest){
        if(!id_item){
            throw new Error("Erro ao indentificar o item a ser removido!")
        }
        const orderItem = await prismaClient.item.delete({
            where:{id: id_item}
        })

        return orderItem;
    }
    

}

export {RemoveItemService}