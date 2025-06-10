import axios from "axios";
import { useState } from "react";

const EditUserForm = ({ user, onClose, onUpdate }) => {
	const [formData, setFormData] = useState({
		fName: user.fName,
		lName: user.lName,
		age: user.age,
		email: user.email,
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:8080/api/users/${user._id}`, formData)
			.then(() => {
				alert("User updated!");
				onUpdate();
				onClose();
			})
			.catch((error) => {
				console.error(error);
				alert("Update Failed!");
			});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white p-6 rounded shadow-md mb-4"
		>
			<h3 className="text-lg font-semibold mb-4">Edit User</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				<input
					type="text"
					name="fName"
					value={formData.fName}
					onChange={handleChange}
					placeholder="First Name"
					className="border px-4 py-2 rounded"
				/>
				<input
					type="text"
					name="lName"
					value={formData.lName}
					onChange={handleChange}
					placeholder="Last Name"
					className="border px-4 py-2 rounded"
				/>
				<input
					type="number"
					name="age"
					value={formData.age}
					onChange={handleChange}
					placeholder="Age"
					className="border px-4 py-2 rounded"
				/>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Email"
					className="border px-4 py-2 rounded"
				/>
			</div>
			<div className="flex justify-end gap-2">
				<button
					type="submit"
					className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
				>
					Update
				</button>
				<button
					type="button"
					onClick={onClose}
					className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
				>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default EditUserForm;
