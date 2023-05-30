import prismaClient from "../../prisma";
import{hash} from 'bcryptjs';

interface UserRequest{
    nome: string;
    email: string;
    senha: string;
}

class CreateUserService{
    
    async execute({nome, email, senha}: UserRequest){

        //verificar se foi enviado o valor do e-mail
    if(!email){
        throw new Error("E-mail não enviado!");
    }

    //verifica se o e-mail já foi cadastrado
    const UserAlreadyExists = await prismaClient.usuario.findFirst({
        where:{
            email:email
        }
    })
    if(UserAlreadyExists){
        throw new Error("E-mail já cadastrado!");
    }

    const senhahash = await hash(senha, 8)

    //Criação de um novo usuário no banco de dados
    const user = await prismaClient.usuario.create({
        data:{
            nome: nome,
            email: email,
            senha: senhahash,
        },
        select:{
            id:true,
            nome:true,
            email:true,
        }
    })

        return user;
    }
}
export{CreateUserService}