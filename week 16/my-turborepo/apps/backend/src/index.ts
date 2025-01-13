import express from "express";

import { VALUE } from "@repo/common/config";

const app = express();

app.get("/", (req, res) => {
  res.send(VALUE);
});

app.listen(3005);
