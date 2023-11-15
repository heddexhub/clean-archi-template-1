const { ICreateAccount } =
  require("../../domain/services/account").iCreateAccount;

const ICreateAccountController = async (data) => {
  await ICreateAccount(data)
    .then(() => console.log("can create"))
    .catch((error) => {
      throw error;
    });
};

module.exports = ICreateAccountController;
