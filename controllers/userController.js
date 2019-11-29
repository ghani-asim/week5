// Controller
'use strict';
const userModel = require('../models/userModel');

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_create_post = async (req, res) => {
  const params = [
    req.body.name,
    req.body.email,
    req.body.passwd
  ];
  const response = await userModel.addUser(params);
  const user = await userModel.getUser([response.insertId]);
  res.json(user);
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