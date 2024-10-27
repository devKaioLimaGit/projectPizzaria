import prismaClient from "../../prisma";
import { hash } from "bcrypt";
interface UserRequest {
  name: string;
  email: string;
  password: string;
}
class CreateUSerService {
  async execute({ name, email, password }: UserRequest) {
    // verificar se ele enviou o email:
    if (!email) {
      throw new Error("Email incorrect");
    }
    // verificar se esse email já está cadastrado na plataforma:
    const userAlreadExists = await prismaClient.user.findFirst({
      where: { email },
    });

    if (userAlreadExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  }
}

export { CreateUSerService };
