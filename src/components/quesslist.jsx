import React, { useState } from "react";

import voprosi from "../voprosi";
import Quession from "./quession";
// import "../index.scss";

const Quesslist = ({ theme, setCategory }) => {
  const [quesnow, setQuesnow] = useState(voprosi[theme]);
  const [quesnumber, setQuesnumber] = useState(0);
  const [teruansw, setTeruansw] = useState(0);

  const categoryMap = {
    sport: "Спорт",
    history: "История",
    science: "Наука",
  };

  const Howtrueres = () => {
    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>
          Вы отгадали {teruansw} ответа из {quesnow.length}
        </h2>
        <button onClick={() => setCategory("menu")}>Главная</button>
      </div>
    );
  };
  return (
    <div>
      <h2>Тема вопросов: {categoryMap[theme]}</h2>
      <div className="progress">
        <div
          style={{ width: (quesnumber / quesnow.length) * 100 + "%" }}
          className="progress__inner"
        ></div>
      </div>
      {quesnow[quesnumber] && (
        <Quession
          text={quesnow[quesnumber]}
          setQuesnumber={setQuesnumber}
          setCategory={setCategory}
          setTeruansw={setTeruansw}
        />
      )}
      {quesnumber > quesnow.length - 1 ? Howtrueres() : null}
    </div>
  );
};

export default Quesslist;
