import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Product from '../models/productsModel.js'
import {products} from '../products.js'
//import multer from 'multer';

const productRouter = express.Router();

/*var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
});
var upload=multer({storage:storage});*/

productRouter.get('/', expressAsyncHandler(async (req,res) => {
    const products = await Product.find({});
    res.send(products);
}));


productRouter.get('/seed', expressAsyncHandler(async(req,res) => {
    const createdProducts = await Product.insertMany(products);
    res.send( {createdProducts} );
}))


productRouter.get('/:id', expressAsyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id);

    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: "Product not found."});
    }
}))


export default productRouter;