import { useEffect, useState } from "react";
import "./App.css";
import Register from "./Pages/Register";
import Login from "./Components/Login";
import useLocalStorage from "./Hooks/useLocalStorage";
import Dashboard from "./Components/Dashboard";
import ContactsProvider from "./Contexts/ContactsProvider";
import ConversationsProvider from "./Contexts/ConversationsProvider";
import SocketProvider from "./Contexts/SocketProvider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./Store";
import OTP from "./Pages/Otp";
function App() {
  const [ID, setID] = useLocalStorage("id");
  const [user, setUser] = useLocalStorage("USER");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addUser(user));
  }, []);
  const dashboard = (
    <SocketProvider id={ID}>
      <ContactsProvider>
        <ConversationsProvider id={ID}>
          <Dashboard id={ID} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  // return ID ? dashboard : <Login onSubmitID={setID} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
