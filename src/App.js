import React, { useState } from "react";
import Counter from "./components/Counter";
import "./.css";
import Paragraph from "./components/Paragraph";
import Employees from "./components/Employees";

const App = () => {
  // Counter start
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  // Counter end

  // Paragraph start
  let [paragr, setPara] = useState([]);

  const handleParagraph = (newParagraphObj) => {
    let newPa = [...paragr];
    newPa.push(newParagraphObj);
    setPara(newPa);
    console.log(paragr);
  };

  // Paragraph end

  // Employees start
  let employees = [
    { id: 1, name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { id: 2, name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { id: 3, name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { id: 4, name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { id: 5, name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { id: 6, name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { id: 7, name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { id: 8, name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    { id: 9, name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
    { id: 10, name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },
    { id: 11, name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72 },
  ];

  // Employees end

  return (
    <div>
      <Counter increment={increment} decrement={decrement} counter={counter} />
      <hr />
      <Paragraph handleParagraph={handleParagraph} paragr={paragr} />
      <hr />
      <Employees employees={employees} />
    </div>
  );
};

export default App;
