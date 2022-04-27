import "./App.css";
import React, { Suspense, useEffect } from "react";
import { useState, useRef } from "react";
import LoginScreen from "./screens/LoginScreen.js";
import DashboardScreen from "./screens/DashboardScreen.js";
import ContextProvider from "./context/ContextProvider.js";
import Context from "./context/Context.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem("loginCheck") !== null
      ? sessionStorage.getItem("loginCheck")
      : "false"
  );

  // const loginCheck = useRef(false);
  // sessionStorage.setItem("loginCheck", false);
  // useEffect(() => {
  //   if (sessionStorage.getItem("loginCheck") === false) {

  //   }
  // }, [loggedIn]);

  // useEffect(() => {
  //   setLoggedIn(
  //     sessionStorage.getItem("loginCheck") !== null
  //       ? sessionStorage.getItem("loginCheck")
  //       : false
  //   );
  // }, []);

  // useEffect(() => {
  //   console.log(loggedIn);
  // }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // console.log(searchTerm)
      // Send Axios request here
    }, 3000);

    // Cleanup fn
    return () => clearTimeout(delayDebounceFn);
  }, []);

  return (
    <ContextProvider>
      <div className="App">
        {/* {loggedIn ? (
        <DashboardScreen />
      ) : (
        <LoginScreen setLoggedIn={setLoggedIn} /> 
      )} */}
        {/* <LoginScreen /> */}
        {console.log(loggedIn, loggedIn === "true", loggedIn === false)}

        {loggedIn === "true" ? (
          <Context.Consumer>{context => <DashboardScreen
            context={context}
            setLoggedIn={setLoggedIn} />}</Context.Consumer>

        ) : (
          <Context.Consumer>{context => (<div>
            <LoginScreen context={context} setLoggedIn={setLoggedIn} />
          </div>)}</Context.Consumer>
        )}
      </div>
    </ContextProvider>

  );
}

export default App;
