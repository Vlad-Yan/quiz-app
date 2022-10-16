import React from 'react';
import '../assets/styles/index.scss';
import ball from '../assets/images/basketball.png';


const StartPage = ({onClickStart}) => {
    return (
        <div className="start">
          <img src={ball} alt="ball"/>
          <h2>Готов проверить свои знания о баскетболе?</h2>
          <button onClick={onClickStart}>Начать</button>
        </div>
    );
};

export default StartPage;