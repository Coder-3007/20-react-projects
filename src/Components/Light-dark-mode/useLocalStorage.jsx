// Custom hooks in React allow you to encapsulate reusable logic that can be shared across multiple components.
//  They are a way to extract component logic into reusable functions.
//   Custom hooks can manage state, handle side effects, and interact with the lifecycle methods of functional components.

import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
