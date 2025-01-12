import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/", (req, res) => {
  res.json({
    message: "Healthy server",
  });
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

//hello

app.post("/", async (req, res) => {
  try {
    // Attempt to create a new user
    await client.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
      },
    });

    // Respond with success if no errors
    res.json({
      message: "Done signing up!",
    });
  } catch (error: any) {
    // Handle the Prisma error for unique constraint violations (duplicate email)
    if (error.code === "P2002") {
      res.status(400).json({ error: "Email is already taken." });
    } else {
      // Log the full error for debugging purposes
      console.error(error);

      // Respond with a generic error message
      res.status(500).json({ error: "An error occurred while signing up." });
    }
  }
});

app.listen(3000);
