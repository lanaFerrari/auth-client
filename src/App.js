import { useEffect, useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SignUp from "./resources/Sign-up";
import Login from "./resources/Login";
import PostsList from "./resources/Posts";

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    const userAsString = localStorage.getItem("user");

    if (userAsString) {
      const user = JSON.parse(userAsString);

      setAuthenticatedUser(user);
    }
  }, []);

  return (
    <>
      <SignUp
        setAuthenticatedUser={setAuthenticatedUser}
        setUserEmail={setUserEmail}
        setUserPassword={setUserPassword}
        userEmail={userEmail}
        userPassword={userPassword}
      />
      <Login
        setAuthenticatedUser={setAuthenticatedUser}
        setUserEmail={setUserEmail}
        setUserPassword={setUserPassword}
      />
      {authenticatedUser && <div>Secrets</div>}

      <PostsList userEmail={userEmail} />
    </>
  );
}

export default App;
