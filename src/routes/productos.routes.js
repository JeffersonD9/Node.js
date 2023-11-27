
import { Router } from "express";
import {index, getProductos, getByIdProductos,createProductos,updateProductos,deleteProductos} from '../controller/productos.controller.js'

const router = Router()

router.get('/',index)

router.get('/Productos', getProductos)

router.get('/Productos/:id', getByIdProductos)

router.post('/Productos/create', createProductos)

router.patch('/Productos/edit/:id',updateProductos)

router.delete('/Productos/delete/:id',deleteProductos)



export default router



