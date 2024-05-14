import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
	const [username, setUsername] = useState("");
	const [Password, setPassword] = useState("");

	// Part 4
	// use UserContext
	const { setUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser(username, Password);
	};
	return (
		<div>
			<h2>Login</h2>
			<input
				type="text"
				placeholder="Enter Name"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Enter Password"
				value={Password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default Login;
