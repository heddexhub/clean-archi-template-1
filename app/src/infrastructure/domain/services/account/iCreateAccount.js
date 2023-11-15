const UserModel = require("../../validators").user.model;

export default ICreateAccount = async (account) => {
  await UserModel.ICanCreateAccount(account)
    .then(() => console.log("can create"))
    .catch((error) => {
      throw error;
    });
};
