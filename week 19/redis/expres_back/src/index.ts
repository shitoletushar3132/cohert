import express from "express";
import { createClient } from "redis";

const app = express();

app.use(express.json());

const client = createClient();
client.connect();

app.post("/submit", async (req, res) => {
  const { problemId, userId, code, language } = req.body;

  // push this to a database prisma.submission.create()

  try {
    await client.lPush(
      "submission",
      JSON.stringify({ problemId, userId, code, language })
    );
  } catch (error) {
    res.json({ message: "error" });
    console.log(error);
  }

  res.json({
    message: "Submission recevied",
  });
});

app.listen(3000, () => {
  console.log("server satart at 3000");
});
