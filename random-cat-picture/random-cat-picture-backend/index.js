const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/cats", async (req, res) => {
  try {
    const response = await axios.get("https://cataas.com/cat");
    res.json({ catUrl: response.request.res.responseUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
