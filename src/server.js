import app from "./app.js";

const port = process.env.PORT || process.env.SERVER_PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at ${port} port`);
});
