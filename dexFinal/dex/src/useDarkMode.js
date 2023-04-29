import { useEffect, useState } from "react";

export const useDarkMode = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const body = document.body;

    if (darkMode) {

      body.classList.add("dark");

    } else {

      body.classList.remove("dark");

    }

  }, [darkMode]);

  const toggleDarkMode = () => {

    setDarkMode(!darkMode);

  };

  return [darkMode, toggleDarkMode];

};

