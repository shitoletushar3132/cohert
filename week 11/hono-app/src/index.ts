import { Hono } from "hono";

const app = new Hono();

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    await next();
  } else {
    return c.text("you dont have access");
  }
});

app.get("/", async (c) => {
  // Log headers and query params
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.text("Hello Hono!");
});

app.post("/user", async (c) => {
  const body = await c.req.json();
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  console.log(body);
  return c.text("User data received!");
});

export default app;
