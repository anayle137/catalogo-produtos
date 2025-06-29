import express from "express";
import router from "./routes";
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

app.use(router);

export default app;
