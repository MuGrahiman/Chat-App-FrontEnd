import { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import useLocalStorage from "./Hooks/useLocalStorage";
import Dashboard from "./Components/Dashboard";
import ContactsProvider from "./Contexts/ContactsProvider";
import ConversationsProvider from "./Contexts/ConversationsProvider";
import SocketProvider from "./Contexts/SocketProvider";

function App() {
  const [ID, setID] = useLocalStorage("id");
  const dashboard = (
    <SocketProvider id={ID}>
      <ContactsProvider>
        <ConversationsProvider id={ID}>
          <Dashboard id={ID} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return ID ? dashboard : <Login onSubmitID={setID} />;
}

export default App;
