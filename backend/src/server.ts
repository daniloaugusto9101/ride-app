import createApp from "./app";

const app = createApp();

const port = 8080;

app.listen(port, () => {
  console.log(`🔥 Server is running on port http://localhost:${port}`);
});
