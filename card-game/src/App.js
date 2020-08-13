import React from 'react';
import './App.css';
import WordCard from './WordCard';

var wordBundle = ["hello", "card", "react", "word", "yarn", "nodejs"];
var word = wordBundle[Math.floor(Math.random() * wordBundle.length)];

function App() {
  return (
   <div className="App">
     <WordCard value={word}/>
   </div>
  );
 }
 
 export default App;