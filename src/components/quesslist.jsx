import React, { useEffect, useState } from "react";

import voprosi from "../voprosi";
import Quession from "./quession";

const Quesslist = ({ theme, reset }) => {
  const [quesnow, setQuesnow] = useState(voprosi[theme]);
  const [quesnumber, setQuesnumber] = useState(0);

  useEffect(() => {
    console.log(quesnow, quesnumber);

    if (quesnumber > quesnow.length - 1) {
      reset();
    }
  }, [quesnumber]);
  return (
    <div>
      <h1>Тема вопросов: {theme}</h1>
      {quesnow[quesnumber] && (
        <Quession
          text={quesnow[quesnumber]}
          setQuesnumber={setQuesnumber}
          //   reset={reset}
        />
      )}
    </div>
  );
};

export default Quesslist;
