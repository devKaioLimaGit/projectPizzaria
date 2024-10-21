import prismaClient from "../../prisma";
interface OrderRequet{
    order_id: string
}
class RemoveOrderService{
    async execute({order_id}:OrderRequet){

        const order = await prismaClient.order.delete({
            where:{id:order_id}
        })

        return order;
    }
}


export {RemoveOrderService}