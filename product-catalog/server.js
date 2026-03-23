const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/productDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 1️⃣ Add Product
app.post("/products", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

// 2️⃣ Get All Products
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// 3️⃣ Get Product by ID
app.get("/products/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});


// 4️⃣ Update Product
app.put("/products/:id", async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedProduct);
});


// 5️⃣ Delete Product
app.delete("/products/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
});