import express from "express";
import {
	getUser,
	createUser,
	deleteUser,
	updateUser,
} from "../controllers/userController.js";

const router = express.Router();

// get user - route
router.get("/", getUser);

// create user - route
router.post("/", createUser);

// delete user - route
router.delete("/:id", deleteUser);

// update user - route
router.put("/:id", updateUser);

export default router;
