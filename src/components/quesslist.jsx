import React, { useState } from 'react';

import voprosi  from '../voprosi';

const Quesslist = ({theme}) => {
    const [quesnow, setQuesnow] = useState(voprosi[theme]); 
    const [quesnumber, setQuesnumber] = useState(0); 
    return (
        
        <div>
            <h1>Тема вопросов: {theme}</h1>           
            {
                
                console.log(quesnow)
                

            }
        </div>
    );
}

export default Quesslist;
