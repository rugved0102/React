import React from "react";

const UserContext = React.createContext()
// This creates an empty "context box" — like a container to hold shared data.

// But right now, this box is empty, and you're just exporting it so other files can use it.

export default UserContext

// You're declaring a public library (UserContext) but you haven't stocked the shelves yet (no value given).
// Later, you'll provide books (data) using a Provider and allow others to read/write from anywhere.