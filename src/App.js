import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import useLocalStorage from "./Hooks/useLocalStorage";
import Dashboard from "./Components/Dashboard";
import ContactsProvider from "./Contexts/ContactsProvider";

function App() {
  const [ID, setID] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={ID} />
    </ContactsProvider>
  );
  
  return ID ? dashboard : <Login onSubmitID={setID} />;
}

export default App;
