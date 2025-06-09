import User from "../models/User.js";

export const getUser = async (req, res) => {
	try {
		const users = await User.find();
		if (!users.length)
			return res.json({ message: "Not yet any users created!</h1>" });
		else res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const createUser = async (req, res) => {
	const { fName, lName, age, email } = req.body;
	try {
		const newUser = new User({ fName, lName, age, email });
		await newUser.save();
		res.status(201).json({
			message: "User created successfully!",
			user: newUser,
		});
	} catch (error) {
		console.log(
			"Error occurred while saving new user information: ",
			error.message
		);
		res.status(500).json({ message: error.message });
	}
};

export const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const deleteUser = await User.findByIdAndDelete(id);
		if (!deleteUser) {
			return res.status(404).json({ message: "User not found!" });
		}
		res.status(200).json({ message: "User deleted successfully!" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedUser = await User.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true, // Ensures validation rules are run
		});

		if (!updatedUser) {
			return res.status(404).json({ message: "User not found!" });
		}

		res.status(200).json({
			message: "User updated successfully!",
			user: updatedUser,
		});
	} catch (error) {
		console.error("❌ Error updating user:", error); // 👈 shows full error
		res.status(500).json({ message: error.message });
	}
};
