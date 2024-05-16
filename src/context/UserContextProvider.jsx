import React, { useState } from "react";
import UserContext from "./UserContext";
// part 2: create provider
const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	return (
		// pass the data you want to globally access in any children component in value attribute
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;

// now, how to get access to the store?--App.js
