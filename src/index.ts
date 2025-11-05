import express from "express";

const app = express();

app.get("/health", (request, response) => {
  response.json({ message: "Server Running" });
});

app.listen(3000, () => {
  console.log("Server Running");
});
