import { useEffect, useState } from "react";
import axios from "axios";
import EditUserForm from "./EditUserForm";

const UserList = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);
	const [editUser, setEditUser] = useState(null);

	const fetchUser = () => {
		axios
			.get("http://localhost:8080/api/users")
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchUser();
	}, []);

	const handleDelete = (id) => {
		axios
			.delete(`http://localhost:8080/api/users/${id}`)
			.then(() => {
				alert("User deleted!");
				fetchUser();
			})
			.catch((err) => {
				alert("User Deletion Failed!");
				console.error(err);
			});
	};

	return (
		<div className="max-w-6xl mx-auto p-6">
			<h2 className="text-2xl font-bold mb-4">User List</h2>

			{editUser && (
				<EditUserForm
					user={editUser}
					onClose={() => setEditUser(null)}
					onUpdate={fetchUser}
				/>
			)}

			<table className="min-w-full table-auto border border-gray-300 rounded shadow-md">
				<thead className="bg-gray-100">
					<tr>
						<th className="px-4 py-2">First Name</th>
						<th className="px-4 py-2">Last Name</th>
						<th className="px-4 py-2">Age</th>
						<th className="px-4 py-2">Email</th>
						<th className="px-4 py-2">Actions</th>
					</tr>
				</thead>
				<tbody>
					{loading ? (
						<tr>
							<td colSpan="5" className="text-center py-4">
								Loading...
							</td>
						</tr>
					) : error ? (
						<tr>
							<td colSpan="5" className="text-red-600 text-center py-4">
								{error}
							</td>
						</tr>
					) : data.length === 0 ? (
						<tr>
							<td colSpan="5" className="text-center py-4">
								No user found!
							</td>
						</tr>
					) : (
						data.map((user) => (
							<tr key={user._id} className="border-t hover:bg-gray-50">
								<td className="px-4 py-2">{user.fName}</td>
								<td className="px-4 py-2">{user.lName}</td>
								<td className="px-4 py-2">{user.age}</td>
								<td className="px-4 py-2">{user.email}</td>
								<td className="px-4 py-2 space-x-2">
									<button
										onClick={() => setEditUser(user)}
										className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
									>
										Edit
									</button>
									<button
										onClick={() => handleDelete(user._id)}
										className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
									>
										Delete
									</button>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default UserList;
