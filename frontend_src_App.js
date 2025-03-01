import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [currentDestination, setCurrentDestination] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    axios.get('/api/destinations').then(response => {
      setDestinations(response.data);
      loadNewDestination(response.data);
    });
  }, []);

  const loadNewDestination = (data) => {
    const randomDestination = data[Math.floor(Math.random() * data.length)];
    setCurrentDestination(randomDestination);
    setFeedback('');
  };

  const handleAnswer = () => {
    if (userAnswer === currentDestination.name) {
      setScore({ ...score, correct: score.correct + 1 });
      setFeedback(`🎉 Correct! Fun fact: ${currentDestination.funFacts[0]}`);
    } else {
      setScore({ ...score, incorrect: score.incorrect + 1 });
      setFeedback(`😢 Incorrect! Fun fact: ${currentDestination.funFacts[0]}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Globetrotter Challenge</h1>
        {currentDestination && (
          <div>
            <p>Clue: {currentDestination.clues[0]}</p>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={handleAnswer}>Submit Answer</button>
            <button onClick={() => loadNewDestination(destinations)}>Next</button>
          </div>
        )}
        <div>
          <p>Score: Correct - {score.correct}, Incorrect - {score.incorrect}</p>
          <p>{feedback}</p>
        </div>
      </header>
    </div>
  );
}

export default App;