import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";

const app = express();

//  Middlewares
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

await connectDB();

// Routes
app.get("/", (req, res) => res.send("Api is working"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;

// db name : blogApp
// db pass : ULYzcrLRGREgOX5Q
