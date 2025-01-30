import React, { useState } from "react";

import Quesslist from "./quesslist";
const Quize = () => {
  const [category, setCategory] = useState("Меню");
  const reset = () => {
    setCategory("Меню");
  };

  return (
    <div className="mainboard">
      {category == "Меню" ? (
        <>
          <button onClick={() => setCategory("sport")}>Спорт</button>
          <button onClick={() => setCategory("История")}>История</button>
          <button onClick={() => setCategory("Наука")}>Наука</button>
        </>
      ) : (
        <Quesslist theme={category} reset={reset} />
      )}
    </div>
  );
};

export default Quize;
