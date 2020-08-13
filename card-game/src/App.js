import React from 'react';
import './App.css';
import WordCard from './WordCard';

var wordBundle = ["hello", "card", "react", "word", "yarn", "nodejs"];
var word = wordBundle[Math.floor(Math.random() * wordBundle.length)];

function App() {
  return (
   <div className="App">
     <h1>Rules</h1>
     <h2>If you guessed it right you win the game.</h2>
     <h2>Guess the word below ! (F5 to guess new word)</h2>

     <WordCard value={word}/>
   </div>
  );
 }
 
 export default App;