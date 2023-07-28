import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  addListeners,
  removeListeners,
  resetIdleTimeout,
  loggedOutTime,
} from "./idealTimeout";

const App = () => {
  // IDLE TIMEOUT - LOGOUT AFTER 5 HOURS IF USER IS IN STATIC MODE
  const [loadListeners, setLoadListeners] = useState(false);
  useEffect(() => {
    if (!loadListeners) {
      addListeners();
      setLoadListeners(true);
    }
    resetIdleTimeout();
    return () => {
      removeListeners();
      clearTimeout(loggedOutTime);
    };
    //eslint-disable-next-line
  }, []);
  // IDLE TIMEOUT - LOGOUT AFTER 5 HOURS IF USER IS IN STATIC MODE

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
