// Controller
'use strict';
const userModel = require('../models/userModel');

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_create_post = (req, res) => {
  console.log('Upload cat function is running');
  console.log(req.file);
}

const user_get = async (req, res) => {
  const params = [req.params.id];
  const user = await userModel.getUser(params);
  res.json(user[0]);
}
   
module.exports = {
  user_list_get,
  user_create_post,
  user_get,
};