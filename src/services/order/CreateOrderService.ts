import prismaClient from "../../prisma";

interface OrderResquest{
    table: number;
    name: string
}

class CreateOrderService{
    async execute({table,name}:OrderResquest){
        const order = await prismaClient.order.create({
            data:{
                table: table,
                name:name
            }
        });

        return order;
    }

}

export {CreateOrderService}