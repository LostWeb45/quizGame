import React, { useState } from "react";
const Quession = ({ text, setQuesnumber, setTeruansw }) => {
  const [answer, setAnswer] = useState(null);
  const cuonter = () => {
    if (answer === null) {
      return null;
    }

    const isCorrect = text["answer"].some(
      (ans) => ans[1] === 1 && ans[0] === answer
    );

    if (isCorrect) {
      setTeruansw((prev) => prev + 1);
    }
    setAnswer(null);
    setQuesnumber((prev) => prev + 1);
  };
  return (
    <div>
      <p>Вопрос: {text["quission"]}</p>
      {text["answer"].map((ans, id) => (
        <label htmlFor={id} key={ans}>
          <div key={id} className="quession">
            <input
              type="radio"
              name="ques"
              id={id}
              onChange={() => setAnswer(ans[0])}
            />
            <span>{ans[0]}</span>
          </div>
        </label>
      ))}

      <button onClick={cuonter}>Ответить</button>
    </div>
  );
};

export default Quession;
