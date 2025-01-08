const express = require("express");
const { get_product, add_product, edit_product, delete_product } = require("../controllers/productController");

const productRouter = express.Router();


// creating API 
productRouter.get("/products",get_product)

productRouter.post("/add-products",add_product)


productRouter.put("/edit-product/:id",edit_product)

productRouter.delete("/delete-product/:pro_id",delete_product)

module.exports = productRouter;



// productRouter.get("/products",(req, res) => {
//     res.send(
//         "Welcome to 1st API"
//     );
// } )

