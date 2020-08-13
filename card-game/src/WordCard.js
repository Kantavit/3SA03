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
        completed: false
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({...state, guess}) // want all same state but change new guess
        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah! you guessed it right.')
                setState({...state, guess: '', completed: true})
                document.getElementById("result").innerHTML = "You win!";
            }else{
                console.log('reset, try again.')
                setState({...state, guess: '', attempt: state.attempt + 1})
                document.getElementById("result").innerHTML = "You lose, try again";
            }
        }
        //console.log(guess)
    }

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
