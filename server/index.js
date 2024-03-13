import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/search", async (req, res) => {
  const { q, page = 1, size = 2 } = req.query;
  console.log(q, page, size);
  const response = await fetch(
    `https://6aec9ca46ed5408d922a6b08e0459821.us-central1.gcp.cloud.es.io:443/main/_search?q=${q}&size=${size}&from=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "ApiKey OW5tOUw0NEIxeUQzcUxUUXhuQmI6b2hzY0xwUHZSNXlBTkFQc3lvbnhVQQ==",
      },
    },
  );

  const data = await response.json();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
