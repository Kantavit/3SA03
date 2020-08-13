import React, {useState} from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '', 
        guessed: [],
        completed: false
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        
        let guessed = [...state.guess, c.toUpperCase()]
        if(guessed.length == 1){
            document.getElementById('inputAnswer').innerHTML = `You guess: ${c.toUpperCase()}` 
        }else{
            document.getElementById('inputAnswer').innerHTML += c.toUpperCase();
        }
        
        let guess = state.guess + c
        setState({...state, guess}) // want all same state but change new guess
        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah! you guessed it right.')
                setState({...state, guess: '', completed: true, attempt: state.attempt + 1})
                document.getElementById("result").innerHTML = "Status: You win!";
                document.getElementById("attempt").innerHTML = `Attempt: ${state.attempt}`;

            }else{
                console.log('reset, try again.')
                setState({...state, guess: '', attempt: state.attempt + 1})
                document.getElementById("result").innerHTML = "Status: You lose, try again";
                document.getElementById("attempt").innerHTML = `Attempt: ${state.attempt}`;
            }
        }
        //console.log(guess)
    }

    // if(props.value.isSurrenderConfirm){
    //     props.value.getAnswer(state.word)
    // }

    return (
        <div>
            { 
                state.chars.map((c, i) => 
                <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                ) 
            }
        </div>
    );

    
}
