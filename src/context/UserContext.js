import React from "react";

// Part 1
// first create a context from React
// createContext() is a method just like useState() and store it in variable.

const UserContext = React.createContext();

// throw this variable as output
export default UserContext;

//once we make context, we also have to make provider, so that component can able to access the global data value.
