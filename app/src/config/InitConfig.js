require("dotenv").config();
const fs = require("fs");

export default () => {
  return new Promise((resolve, reject) => {
    try {
      const jsonConfig = JSON.parse(fs.readFileSync("./config.json"));
      let output = { ...jsonConfig };
      for (const [key, value] of Object.entries(jsonConfig))
        output[key] = process.env[key] ?? value;
      fs.writeFileSync("./config.json", JSON.stringify(output, null, 2));
      return resolve(output);
    } catch (error) {
      return reject(error);
    }
  });
};
