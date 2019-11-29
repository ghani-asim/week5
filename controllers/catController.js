// Controller
'use strict';
const catModel = require('../models/catModel');

//const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_create_post = (req, res) => {
  console.log('Upload cat function is running');
  console.log(req.file);
}

const cat_get = async (req, res) => {
  const params = [req.params.id];
  const cat = await catModel.getCat(params);
  res.json(cat[0]);
}
   
module.exports = {
  cat_list_get,
  cat_create_post,
  cat_get,
};