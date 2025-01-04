const http = require("http");
require("dotenv").config();
const app = require("./app");

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on the port :${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.error(`🧩 Uncaught Exception 🤪`);
  console.error(err);
});

process.on("unhandledRejection", (err) => {
  console.error(`🧩 Unhandled Rejection 🤪`);
  console.error(err);
  // process.exit(1);
});

// changes added from local
