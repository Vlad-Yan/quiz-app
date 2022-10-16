import React from 'react';
import '../assets/styles/index.scss';
import ProgressBar from './UI/ProgressBar';


const Quiz = ({question, onClickVariant, step, length, start}) => {
    
  const percentage = Math.round(step / length * 100);

    return (
      <div className={`${!start ? "hide" : ""}`}>
        <ProgressBar percentage={percentage}/>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((item, index) => (
              <li onClick={() => onClickVariant(index)} key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
};

export default Quiz;