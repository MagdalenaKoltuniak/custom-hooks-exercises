import { useState } from "react";

export const useNumbers = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const generateNumber = () => {
    const newNumber = Math.round(Math.random() * 100000);
    setNumbers((prevNumbers) => [...prevNumbers, newNumber]);
  };

  const deleteNumber = (indexToDelete: number) => {
    setNumbers((prevNumbers) =>
      prevNumbers.filter((_, index) => index !== indexToDelete),
    );
  };

  return {
    numbers,
    generateNumber,
    deleteNumber,
  };
};
