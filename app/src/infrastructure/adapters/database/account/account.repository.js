const DB = require("../InitDB")

const UserModel = {
    ICanCreateAccount: (account) => {
      return new Promise((resolve, reject) => {
        const { email, password } = account;
        let errors = [];
        if (!REGEX.EMAIL.test(email))
          errors.push({ field: "email", message: "Incorrect email" });
        if (!REGEX.PASSWORD.test(password))
          errors.push({ field: "password", message: "Weak password" });
  
        if (errors.length) return reject({ success: false, errors });
        return resolve({ success: true, message: "Account can be created" });
      });
    },
  };
  
  module.exports = UserModel;
  