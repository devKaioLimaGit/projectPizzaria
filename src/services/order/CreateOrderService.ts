import prismaClient from "../../prisma";
interface OrderRrquest {
  table: number;
  name: string;
}
class CreateOrderService {
  async execute({ table, name }: OrderRrquest) {
    const order = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });
    return order;
  }
}

export { CreateOrderService };
