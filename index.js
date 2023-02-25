import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';




function Quiz() {
	const questions = [
		{
			questionText: 'how many days in year?',
			answerOptions: [
				{ answerText: '365', isCorrect: true },
				{ answerText: '368', isCorrect: false },
				{ answerText: '300 ', isCorrect: false },
				{ answerText: '634', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },

			],
		},
		{
			questionText: 'how may days in week? ',
			answerOptions: [
				{ answerText: '8', isCorrect: false },
				{ answerText: '7', isCorrect: true },
				{ answerText: '6 ', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
		{
			questionText: 'how many days in february?',
			answerOptions: [
				{ answerText: '30', isCorrect: false },
				{ answerText: '31', isCorrect: false },
				{ answerText: '28', isCorrect: true },
				{ answerText: '29', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
		{
			questionText: 'how many days in march ',
			answerOptions: [
				{ answerText: '30', isCorrect: false },
				{ answerText: '28 ', isCorrect: false },
				{ answerText: '31 ', isCorrect: true },
				{ answerText: '29 ', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
	];


    const resetQuiz=()=>
    {
		
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
		
    }



const [currentQuestion, setCurrentQuestion] = React.useState(0);
const [showScore, setShowScore] = React.useState(false);
const [score, setScore] = React.useState(0);

const handleAnswerButton = (isCorrect) => {
	if (isCorrect===true) {
		setScore(score + 1);
	}

	const nextQuestion = currentQuestion + 1;
	if(nextQuestion < questions.length) {
		setCurrentQuestion(nextQuestion);
	} else {
		setShowScore(true);
	}
};

	return (
	<div className='quiz'>
      {showScore ? (
		<>
				<div className='score-section'>You scored {score} out of {questions.length}</div>
				<button type="submit"  className='btn' onClick={resetQuiz}>Start Again</button>
				</>
			) : (
				<>
				
					<div className='question'>
						<div className='quest-count'>
							<span>Question No  {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
						<button onClick={() => handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
						
					</div>
					
				</>
			)}
	</div>
	);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Quiz />
  </React.StrictMode>
);
reportWebVitals();