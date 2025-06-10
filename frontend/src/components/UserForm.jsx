import { useState } from "react";
import axios from "axios";

const UserForm = () => {
	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [age, setAge] = useState("");
	const [email, setEmail] = useState("");
	const [responseMessage, setResponseMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = { fName, lName, age, email };
		axios
			.post("http://localhost:8080/api/users", newUser)
			.then((res) => {
				setResponseMessage(res.data.message);
				setFName("");
				setLName("");
				setAge("");
				setEmail("");
			})
			.catch((err) =>
				setResponseMessage(
					err.response?.data?.message || "Something went wrong!"
				)
			);
	};

	return (
		<div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
			<form onSubmit={handleSubmit} className="space-y-4">
				<h2 className="text-xl font-bold mb-2">Create User</h2>

				<div>
					<label className="block mb-1">First Name:</label>
					<input
						type="text"
						value={fName}
						onChange={(e) => setFName(e.target.value)}
						className="w-full border px-4 py-2 rounded"
					/>
				</div>

				<div>
					<label className="block mb-1">Last Name:</label>
					<input
						type="text"
						value={lName}
						onChange={(e) => setLName(e.target.value)}
						className="w-full border px-4 py-2 rounded"
					/>
				</div>

				<div>
					<label className="block mb-1">Age:</label>
					<input
						type="text"
						value={age}
						onChange={(e) => setAge(e.target.value)}
						className="w-full border px-4 py-2 rounded"
					/>
				</div>

				<div>
					<label className="block mb-1">Email:</label>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full border px-4 py-2 rounded"
					/>
				</div>

				<button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
					Submit
				</button>

				{responseMessage && (
					<p className="text-green-600 font-semibold mt-2">{responseMessage}</p>
				)}
			</form>
		</div>
	);
};

export default UserForm;
