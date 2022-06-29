import Character from "../Components/Character";
import { useContext } from "react";
import { HexdleContext } from "./Board";

const KeyboardContainer = (prop) => {
    const numberLine = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'DEL'];
    const alphaLine = ['A', 'B', 'C', 'D', 'E', 'F', 'ENTER'];

    const appState = useContext(HexdleContext);
    let incorrectChars = [];
    appState.guesses.map(guess => {
        let splitGuess = guess.value.split('');
        return splitGuess.forEach(char => {
            if (incorrectChars.indexOf(char) === -1 && appState.color.indexOf(char) === -1) incorrectChars.push(char);
        })
    });
    return (
        <div className="keyboardContainer" >
            <div className="lines">
                {numberLine.map((char, i) => {
                    let keyClass = '';
                    incorrectChars.indexOf(char) > -1 ? keyClass = 'invalid' : keyClass = '';
                    return <Character value={char} type="button" key={i} click={prop.input} styleClass={keyClass} />
                })}
            </div>
            <div className="lines">
                {alphaLine.map((char, i) => {
                    let keyClass = '';
                    incorrectChars.indexOf(char) > -1 ? keyClass = 'invalid' : keyClass = '';
                    return <Character value={char} type="button" key={i} click={prop.input} styleClass={keyClass} />
                })}
            </div>
        </div >
    )
};

export default KeyboardContainer;