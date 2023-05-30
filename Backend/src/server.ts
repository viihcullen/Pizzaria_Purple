import express, {Request, Response, NextFunction, Router, application} from "express";
import 'express-async-errors' //tratamento de erros no servidor
import cors from 'cors';
import path from 'path';

import {router} from "./routes"; //importação do objeto router do arquivo routes

const app = express();//app vai executar a aplicação sobre o express

app.use(express.json()); //define o formato de dados para json
app.use(router); //concede acesso as rotas do arquivo routes.ts
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));
app.use(cors);

//Middleware para tratamento de erros na rotas
app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
    if(err instanceof Error){

        //verificação se o conteúdo do paramentro err é um erro(tipo Error)
        return res.status(400).json({
            //retorna HTTP Code 400 e uma mensagem
            error: err.message
        })
    }

    //caso não seja um erro na requisição, mas um erro no servidor, será retornado um status code 500, Erro interno
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error.'
    })
})

app.listen(3333, () => console.log("Servidor On"));