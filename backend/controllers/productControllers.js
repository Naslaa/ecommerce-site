const router = require('express').Router();
const authGuard = require('../auth/authGuard');
const productModel = require('../models/productModel');
// const product = require("../models/productModel");
const cloudinary = require("cloudinary");



//create a add product route
router.post("/add", authGuard, async(req, res)=>{
    console.log(req.body);
    

//destructuring
    const {productName, productPrice, productCategory, productDescription}= req.body;
    const {productImage}=req.files;

    //validation
    if (!productName|| !productPrice||!productCategory||!productDescription||!productImage){
    return res.status(422).json({msg:"please enter all fields"});
  
}
const uploadedImage= await cloudinary.v2.uploader.upload(
    productImage.path,{
        folder:"onlinebazar",
        crop:"scale"
    },
);
    try{


        const newProduct = new productModel({
            name: productName,
            price: productPrice,
            category: productCategory,
            description: productDescription,
            image: uploadedImage.secure_url,
        });

       await newProduct.save();
        res.status(201).json({message: "product registration success"})

    }
    catch (error){
        res.status(500).json({error:"product registration failed"})
    }

   
        
  
});


router.get("/get_products", async(req, res)=>{
    try{
        const products= await productModel.find({});
        res.json(products);
}catch (error){
    console.log(error);
    res.status(500).json({error:"internal server error "})
}
})


//get single product
router.get("/get_product/:id",async(req, res)=>{
    try{
        const products= await productModel.findById(req.params.id);
        res.json(products);
}catch (error){
    console.log(error);
    res.status(500).json({error:"internal server error "})
}
})

router.put("/update_product/:id", authGuard, async(req, res)=>{
    console.log(req.body);
    

    //destructuring
        const {productName, productPrice, productCategory, productDescription}= req.body;
        const {productImage}=req.files;
    
        //validation
        if (!productName|| !productPrice||!productCategory||!productDescription||!productImage){
        return res.status(422).json({msg:"please enter all fields"});
      
    }
    const uploadedImage= await cloudinary.v2.uploader.upload(
        productImage.path,{
            folder:"onlinebazar",
            crop:"scale"
        },
    );
        try{
    
    const product = await productModel.findById(req.params.id);
    product.name = productName;
    product.price=productPrice;
    product.category=productCategory;
    product.descripiton= productDescription;
    product.image= uploadedImage.secure_url;

    
           await newProduct.save();
            res.status(201).json({message: "product registration success"})
    
        }
        catch (error){
            res.status(500).json({error:"product registration failed"})
        }
    
          

});

//delete product
router.delete("/delete_product/:id", authGuard, async(req, res)=>
{
    try{
        const product = await productModel.findById(req.params.id);
        await product.deleteOne();
        res.status(200).json({message:"product deleted successfully"});

    }catch(error){
        console.log(error);
        res.status(500).json({error:"internal server error"})
    }
})
module.exports=router;