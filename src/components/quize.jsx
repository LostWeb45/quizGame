import React, { useState } from "react";
import Quesslist from "./quesslist";

const Quize = () => {
  const [category, setCategory] = useState("menu");

  return (
    <div className="mainboard">
      {category == "menu" ? (
        <>
          <h2>Выберите тему для вопросов</h2>

          <div className="btnmenu">
            <button onClick={() => setCategory("sport")}>Спорт</button>
            <button onClick={() => setCategory("history")}>История</button>
            <button onClick={() => setCategory("science")}>Наука</button>
          </div>
        </>
      ) : (
        <Quesslist theme={category} setCategory={setCategory} />
      )}
    </div>
  );
};

export default Quize;
