const startSever = require("./server");
const connectDatabase = require("./database/connectDatabase");

const start = async () => {
  try {
    await connectDatabase();
    startSever();
    
  } catch (err) {
    console.log(err);
  }
};

start();
