const mongoose = require("mongoose");

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 480000,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
};

export default () => {
  return new Promise((resolve, reject) => {
    try {
      mongoose.set("strictQuery", true);
      return resolve(
        mongoose.connect(
          `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongo:27017/admin`,
          OPTIONS
        )
      );
    } catch (error) {
      return reject(error);
    }
  });
};
