const connect = require("mongoose").connect;

const connectDB = async () => {
  try {
    await connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("mongoDB connected...");
  } catch (err) {
    console.error(err.massage);
    process.exit(1);
  }
};

module.exports = connectDB;
