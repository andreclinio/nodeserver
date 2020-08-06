
const UserModel = require('../models/user.model')
const ERR_DUPLICATE_EMAIL = 'Usuário com email cadastrado já existe!'

const create = async (userData) => {
   const userExists = await UserModel.exists({ email: userData.email });
   if (userExists) {
     throw new Error(ERR_DUPLICATE_EMAIL);
   }
 
   const userModel = new UserModel(userData);
   return userModel.save();
}

const list = () => {
  return UserModel.find({});
}

const email2User = (email) => (
    UserModel.findOne({ email })
  );


module.exports = {
    create,
    list,
    email2User,
}