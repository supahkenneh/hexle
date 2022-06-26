import { useContext } from "react";
import Guess from "../Components/Guess";
import { HexdleContext } from "./Board";

const GuessContainer = (props) => {
    const appState = useContext(HexdleContext);
    let concatGuesses = [];
    appState.guesses.forEach(guess => concatGuesses.push(guess));
    concatGuesses.push({ value: appState.currentGuess, submitted: false });
    while (concatGuesses.length < 6) {
        concatGuesses.push({ value: '', submitted: false });
    }
    let guessesArr = [];
    for (let i = 0; i < concatGuesses.length; i++) {
        guessesArr.push(<Guess guess={concatGuesses[i]} key={i} index={i} />);
    }
    return (
        <div className="guess-container">
            {guessesArr}
        </div>
    )
}

export default GuessContainer;