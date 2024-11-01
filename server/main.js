import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./routes/auth.routes.js";

const PORT = process.env.DB_PORT;
const HOST = process.env.DB_HOST;

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hola mundo!💖");
});

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});
