import React from "react";
import { QuoteHashWord } from "../../services/wordHash";
import { useState, useEffect } from 'react';

import { getQuotes } from "../../services/APIs/quotesFetch";
import UserAnswer from "../UserAnswer/UserAnswer";


function GameContainer() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(true);

  const CallQuote = () => { 
    const [quoteResponse, setResponse] = useState([]);
    
  
    useEffect(() => {
     fetchQuotes()
      }, [])
   
  
    const fetchQuotes = async () => {
      try{
        const responses = await getQuotes()
        setLoading(false)
        setResponse(responses.data)
      }
      catch(e){
        console.error(e)
      }
    } 
    return (
      quoteResponse[0]
    )
  }


  
  function handleGameOver() {
    setGameOver(true);
    // any other logic needed to end the game
  }

  const handleAnswerOption = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < 4 ) {
			setCurrentQuestion(nextQuestion);
		} else {
			setGameOver(true);
		}
	};

  return (
    <div className="game-container">
      
    {gameOver ? (
      <div className='score-section'>
        You scored {score} out of 10  
      </div>
    ) : (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/10
          </div>
          <div className='question-text'>     
          {<QuoteHashWord quote = {CallQuote()}/>}
          </div>
        </div> 
        <div className='answer-section'>
          {/* {<UserAnswer quote = {CallQuote()}/>} */}
        </div>
      </>
    )}
      <h1>Score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>Increase Score</button>
      <button onClick={handleGameOver}>End Game</button>
      {gameOver && <h2>Game Over!</h2>}
    </div>
  );
}

export default GameContainer;
