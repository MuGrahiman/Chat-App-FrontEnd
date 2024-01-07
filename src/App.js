import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import useLocalStorage from "./Hooks/useLocalStorage";
import Dashboard from "./Components/Dashboard";
import ContactsProvider from "./Contexts/ContactsProvider";
import ConversationsProvider from "./Contexts/ConversationsProvider";

function App() {
  const [ID, setID] = useLocalStorage("id");
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={ID}>
        <Dashboard id={ID} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return ID ? dashboard : <Login onSubmitID={setID} />;
}

export default App;
