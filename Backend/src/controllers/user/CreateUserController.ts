import { Request, response, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController{
    async handle(req: Request, res: Response){
        //console.log(req.body)

        const {nome, email, senha} = req.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({nome, email, senha});

        //return res.json({ok:true})
        return res.json(user);
    }
}

export{CreateUserController}