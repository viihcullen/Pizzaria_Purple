import {Router} from "express";
import multer from "multer";

import uploadConfig from './config/multer';

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticaded } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { ListCategoryController } from "./controllers/Category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import {ListByCategoryController} from './controllers/product/ListByCategoryController'
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListLastOrderController } from "./controllers/order/ListLastOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

const router = Router(); //crio uma instância do elemento Router

const upload = multer(uploadConfig.upload("./tmp"));


//Crio uma rota simples chamda  /teste que retorna uma dado

    
    //--------- ROTAS PARA USER ------------//=
    router.post('/user', new CreateUserController().handle);

    router.post('/session', new AuthUserController().handle)
    router.get('/userinfo', isAuthenticaded, new DetailUserController().handle);

    //------- ROTAS PARA CATEGORY---------//
    router.post('/category', isAuthenticaded, new CreateCategoryController().handle);
    router.get('/listcategory', isAuthenticaded, new ListCategoryController().handle);

    //------- ROTAS PARA CATEGORY---------//
    router.post('/product', isAuthenticaded, upload.single('file'), new CreateProductController().handle);
    router.get('/category/product', isAuthenticaded, new ListByCategoryController().handle);

    //------- ROTAS PARA Order---------//
    router.post('/order', isAuthenticaded, new CreateOrderController().handle);
    router.delete('/deleteorder', isAuthenticaded, new RemoveOrderController().handle);
    router.put('/order/send', isAuthenticaded, new SendOrderController().handle);
    router.post('/order/add', isAuthenticaded, new AddItemController().handle);
    router.delete('/deleteitem', isAuthenticaded, new RemoveItemController().handle);
    router.get('/order/list', isAuthenticaded, new ListLastOrderController().handle);
    router.get('/order/detail', isAuthenticaded, new DetailOrderController().handle);
    router.put('/order/finish', isAuthenticaded, new FinishOrderController().handle);

export {router}; // exportação do objeto router para acesso de outros arquivos