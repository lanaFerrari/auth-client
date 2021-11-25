import { useEffect, useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { dividerClasses } from "@mui/material";
import SignUp from "./resources/Sign-up";
import Login from "./resources/Login";

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    const userAsString = localStorage.getItem("user");

    if (userAsString) {
      const user = JSON.parse(userAsString);

      setAuthenticatedUser(user);
    }
  }, []);

  return (
    <>
      <SignUp setAuthenticatedUser={setAuthenticatedUser} />
      <Login setAuthenticatedUser={setAuthenticatedUser} />
      {authenticatedUser && <div>Secrets</div>}
    </>
  );
}

export default App;
