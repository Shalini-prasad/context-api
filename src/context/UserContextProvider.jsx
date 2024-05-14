import React, { useState } from "react";
import UserContext from "./UserContext";
// part 2
const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;

// now, how to get access to the store?--App.js
