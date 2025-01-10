import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.use("/api/v1/blog/*", async (c, next) => {
  const header = c.req.header("Authorization") || "";

  const token = header.split(" ")[1];

  const response = await verify(token, "secret");

  if (response.id) {
    next();
  } else {
    c.status(403);
    return c.json({
      message: "unauthorized",
    });
  }

  await next();
});

app.post("/api/v1/signup", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const findUSer = await prisma.user.findUnique({
      where: {
        username: body.username,
      },
    });

    if (findUSer) {
      c.status(403);
      return c.json({
        message: "username Already Use",
      });
    }

    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name,
      },
    });

    const token = await sign({ id: user.id }, "secret");

    c.status(200);
    return c.json({
      jwt: token,
      message: "sign up successfull",
    });
  } catch (error) {
    c.status(411);
    return c.json({ message: "Invalid" });
  }
});

app.post("/api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const findUSer = await prisma.user.findUnique({
    where: { username: body.username },
  });

  if (!findUSer) {
    c.status(403);
    return c.json({ message: "User not found" });
  }

  // Compare plain-text passwords
  if (findUSer.password !== body.password) {
    c.status(403);
    return c.json({ message: "Invalid credentials" });
  }

  const token = sign({ id: findUSer.id }, "secret");

  c.status(200);
  return c.json({
    jwt: token,
    message: "Signin successful",
  });
});

app.post("/api/v1/blog", (c) => {
  return c.text("h");
});

app.put("/api/v1/blog", (c) => {
  return c.text("h");
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("h");
});

app.get("/api/v1/blog:id", (c) => {
  return c.text("h");
});

export default app;
