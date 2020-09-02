const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {

   //VIEW
   async index(req, res) {
      const { page = 1 } = req.query; // Por padrão a página retornada será a 1
      const products = await Product.paginate({}, { page, limit: 10 });
      return res.json(products);
   },

   //DETAIL
   async show(req, res) {
      const product = await Product.findById(req.params.id);
      return res.json(product);
   },

   //CREATE
   async create(req, res) {
      const product = await Product.create(req.body);
      return res.json(product);
   },

   //UPDATE
   async update(req, res) {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true});
      return res.json(product);
   },

   //DELETE
   async destroy(req, res) {
      const product = await Product.findByIdAndDelete(req.params.id);
      return res.send(product.title + ' deletado com sucesso!')
   }
};