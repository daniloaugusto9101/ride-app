import createApp from "./app";

const app = createApp();

const port = 3333;

app.listen(port, () => {
  console.log(`🔥 Server is running on port http://localhost:${port}`);
});
