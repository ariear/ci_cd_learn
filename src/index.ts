import { Elysia } from "elysia";

export const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/sqrt/:id", ({ params: { id } }) => Number(id) ** 2)
  .get("/hello/:name", ({ params: { name } }) => `Halo, ${name}`)
  .get("/:slug", ({ params: { slug } }) => slug)
  .post("/test/webhook", ({ body }) => {
    console.log(body);

    return {
      message: "webhook receiver udah dapet data nih",
    };
  })
  .listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
console.log("Selamat melakukan suki")
