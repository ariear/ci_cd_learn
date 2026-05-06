import { Elysia } from "elysia";

export const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/sqrt/:id", ({ params: { id } }) => Number(id) ** 2)
  .get("/:slug", ({ params: { slug } }) => slug)
  .listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
