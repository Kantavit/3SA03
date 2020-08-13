import React from 'react';
import './App.css';
import WordCard from './WordCard';

var wordBundle = ["hello", "card", "react", "word", "yarn", "nodejs", "git", "choco", "css", "javaScript", "localhost", "js"];
var word = wordBundle[Math.floor(Math.random() * wordBundle.length)];

const nextWord = () => {
  window.location.reload(false);
}

// const getAnswer = (answer) => {
//   document.getElementById('result').innerHTML = `Answer: ${answer}`;
// }

function App() {
  return (
   <div className="App">
     <h1>Rules</h1>
     <h2>If you guessed it right you win the game.</h2>
     <h2>
        Guess the word below ! or <button className="button" onClick={nextWord}>Next word</button>
     </h2>

     <WordCard value={word}/>

     <h2 id="inputAnswer"></h2>
     <h2 id="result"></h2>
     <h2 id="attempt"></h2>

     {/* <h2>
        <button className="button" onClick={getAnswer}>Show answer</button>
     </h2> */}
   </div>
  );
 }
 
 export default App;