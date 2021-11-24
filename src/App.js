import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./resources/signUpForm";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { dividerClasses } from "@mui/material";

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
      {authenticatedUser && <div>Hello, humans</div>}
    </>
  );
}

export default App;
