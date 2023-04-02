import React from "react";

const useLocalStorage = () => {
  const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
  };

  return { getItem, setItem, removeItem };
};

export default useLocalStorage;
