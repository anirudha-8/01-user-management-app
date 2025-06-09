import mongoose from "mongoose";

// mongodb connection
export const db = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL);
		console.log("✅ MongoDB Database Connected Successfully!");
	} catch (error) {
		console.error("❌ Error: Database Connection Failed!", error);
		process.exit(1); // Exit process to prevent running on failure
	}
};
