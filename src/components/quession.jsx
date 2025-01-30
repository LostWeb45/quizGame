import React, { useState } from "react";
const Quession = ({ text, setQuesnumber, reset }) => {
  const [answer, setAnswer] = useState(null);
  const cuonter = () => {
    // console.log(text["answer"].lenght, answer);

    if (answer != null) setQuesnumber((prev) => prev + 1);
  };
  return (
    <div>
      <p>Вопрос: {text["quission"]}</p>
      {text["answer"].map((ans, id) => (
        <div key={id}>
          <input
            type="radio"
            name="ques"
            id={id}
            onClick={() => setAnswer(ans[1])}
          />
          <label htmlFor={id}>{ans[0]}</label>
        </div>
      ))}

      <button onClick={cuonter}>Ответить</button>
    </div>
  );
};

export default Quession;
