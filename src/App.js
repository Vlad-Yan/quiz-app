import { useState } from 'react';
import questions from './questions.json';
import './assets/styles/index.scss';
import Result from './components/Result';
import Quiz from './components/Quiz';
import StartPage from './components/StartPage';


function App() {

const [step, setStep] = useState(0);
const [correct, setCorrect] = useState(0);
const [start, setStart] = useState(false);

const question = questions[step];

const onClickVariant = (index) => {
  setStep(step + 1);

  
  if (question.correct === index) {
    setCorrect(correct + 1);
  }
}

const onClickStart = () => {
  setStart(true);
}

const restart = () => {
  setCorrect(0);
  setStep(0);
  setStart(false);
}

  return (
    <div className="App">
      {!start && 
      <StartPage onClickStart={onClickStart}/>}
      {questions.length !== step
      ?
      <Quiz start={start} step={step} question={question} onClickVariant={onClickVariant} length={questions.length}/>
      :
      <Result correct={correct} length={questions.length} restart={restart}/>
      }
    </div>
  );
}

export default App;
