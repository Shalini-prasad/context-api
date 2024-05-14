import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

// Part 3
// import userContextProvider
function App() {
	return (
		<UserContextProvider>
			<Login />
			<Profile />
		</UserContextProvider>
	);
}

export default App;

// create component Login and Profile
