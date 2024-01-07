import React, { useState } from "react";
import { useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const PREFIX = "CHAT-APP-CLONE-";
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") return initialValue();
    else return initialValue;
  });
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);
  return [value, setValue];
};

export default useLocalStorage;
