import express, { json, Request, Response } from "express";

const app = express();
const port = 3333;

app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    player: "Neymar",
  });
});

app.listen(port, () => {
  console.log(`🔥 Server is running on port http://localhost:${port}`);
});
