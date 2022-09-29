import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import axios from "axios";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/movie/:id", async (req, res) => {
  const REQUEST = `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

  await axios
    .get(REQUEST)
    .then((result) => {
      console.log(result);
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

app.get("/top_rated", async (req, res) => {
  const REQUEST =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";
  await axios
    .get(REQUEST)
    .then((result) => {
      console.log(result.data);
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

app.get("/upcoming", async (req, res) => {
  const REQUEST =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";
  await axios
    .get(REQUEST)
    .then((result) => {
      console.log(result);
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

app.get("/popular", async (req, res) => {
  const REQUEST =
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";
  await axios
    .get(REQUEST)
    .then((result) => {
      console.log(result);
      res.status(200).json(result.data);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

app.listen(3002, () => {
  console.log("Running on http://localhost:3002");
});
