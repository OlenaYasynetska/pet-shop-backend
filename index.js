const startServer = require("./server");
const connectDatabase = require("./database/connectDatabase");

const start = async () => {
  try {
    await connectDatabase();
    startServer();
    
  } catch (err) {
    console.log(err);
  }
};

start();
