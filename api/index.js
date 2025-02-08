const app = require("./server");
const vercel = require("@vercel/node"); // Vercel's serverless function adapter

module.exports = vercel.createServer(app);