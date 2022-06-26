import { useContext } from "react";
import Guess from "../Components/Guess";
import { HexdleContext } from "./Board";

const GuessContainer = (props) => {
    const appState = useContext(HexdleContext);

    let concatGuesses = [];
    concatGuesses = [...appState.guesses, appState.currentGuess];
    while (concatGuesses.length < 6) {
        concatGuesses.push('');
    }
    let guessesArr = [];
    for (let i = 0; i < concatGuesses.length; i++) {
        guessesArr.push(<Guess guess={concatGuesses[i]} key={i} />);
    }
    return (
        <div className="guess-container">
            {guessesArr}
        </div>
    )
}

export default GuessContainer;