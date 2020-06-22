// var db = require("../db");

var Product = require("../models/product.model");

module.exports.index = async function(req, res){
    // // neu query page khong co gia tri thi cho mac dinh la 1
    // var page = parseInt(req.query.page) || 1; // n
    // var perPage = 8; // x

    // var start = (page - 1) * perPage;
    // var end = page * perPage;

    // var totalPage = Math.ceil(db.get('products').value().length/perPage);

    // var prevPage = (page > 1) ? (page - 1) : totalPage;
    // var nextPage = (page < totalPage) ? (page + 1) : 1;

    // res.render("products/index", {
    //   page: page,
    //   nextPage: nextPage,
    //   prevPage: prevPage,
    //   products: db.get("products").value().slice(start, end),
    // });


  // Product.find().then(function(products) {
  //   res.render("products/index", {
  //     products: products
  //   })
  // });

  var products = await Product.find();
  res.render("products/index", {
      products: products
    });
};