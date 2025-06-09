import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import User from "./routes/userRoutes.js";

const app = express();

const port = process.env.PORT || 8080;

// middlewares
dotenv.config();
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
	res.send("Home Page");
});

app.use("/api/users", User);

import { db } from "./config/db.js";
// listen to the server
app.listen(port, () => {
	db();
	console.log(`Server is running on: http://localhost:${port}`);
});
