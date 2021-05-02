const express = require('express');
const router = express.Router();
const { Products } = require("../models/products");

const { auth } = require("../middleware/auth");

router.get('/products', (req, res) => {
    
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);

    console.error("before got data - /products", {order, sortBy, limit, skip});
    
    Products.find()
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .then(data => {
            console.log("got data")
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

});

router.get('/products/type', (req, res) => {
    
    let keyword = req.query.keyword ? req.query.keyword : "";
    let types = req.query.type ? req.query.type : "";
    types = types.split("-");
    if(types.length <= 1)
        types[1] = "";
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id';

    console.error("before got data - /products/type", {keyword, types});
    
    Products.find({
            "name":{"$regex":keyword},
            "$and":[{"type":{"$regex":types[0]}},
                    {"type":{"$regex":types[1]}}]
        })
        .sort([[sortBy, order]])
        .then(data => {
            console.log("got data")
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

});


router.post('/products', (req, res) => {
    const products = new Products(req.body);
    products
        .save()
        .then(result => {
            console.log("result",result);
        })
        .catch(err => console.log('err', err));
        res.status(201).json({
        message: "post dta"
    })
});

router.delete('/products/:name', (req, res) =>
    Products.deleteOne({
        name: req.params.name
    }, (err, data) => {
        console.log('delte result',data)
        if (err) {
            res.send('error removing')
        } else {
            console.log(data);
            res.status(204);
        }
    }));

router.delete('/produts/delete/:id', (req, res) => {
    Products.findByIdAndRemove(req.params.id)
        .exec()
        .then(data => {
            if (!data) {
                return res.status(404).end();
            }
            return res.status(204).end();
        })
        .catch(err => next(err));
})


router.get("/products_by_id", (req, res) => {
    let type = req.query.type
    let productIds = req.query.id

    console.log("req.query.id", req.query.id)

    if (type === "array") {
        let ids = req.query.id.split(',');
        productIds = [];
        productIds = ids.map(item => {
            return item
        })
    }

    console.log("productIds", productIds)


    //we need to find the product information that belong to product Id 
    Products.find({ '_id': { $in: productIds } })
        .populate('writer')
        .exec((err, product) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(product)
        })
});
//generates the list of products in the cart



module.exports = router;