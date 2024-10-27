import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      return savedValue !== null ? JSON.parse(savedValue) : defaultValue;
    } catch (error) {
      console.log("Error reading localStorage key “" + key + "”:", error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error setting localStorage key “" + key + "”:", error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
