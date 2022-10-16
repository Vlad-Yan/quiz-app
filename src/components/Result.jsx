import React from 'react';
import '../assets/styles/index.scss';
import confetti from '../assets/images/confetti.png';
import declOfNum from '../utils/declOfNum';


const Result = ({correct, length, restart}) => {
  return (
        <div className="result">
          <img src={confetti} alt="confetti"/>
          <h2>Верно {correct} {declOfNum(correct, ['ответ', 'ответа', 'ответов'])} из {length}</h2>
          <button onClick={restart}>Попробовать снова</button>
        </div>
      );
};

export default Result;