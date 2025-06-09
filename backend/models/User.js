import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	fName: String,
	lName: String,
	age: Number,
	email: String,
});

const User = mongoose.model("User", userSchema);

export default User;
