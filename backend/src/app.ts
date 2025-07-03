import express from "express";
import router from "./routes";
import cors from "cors";

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;