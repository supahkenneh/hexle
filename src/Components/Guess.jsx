import Character from "./Character";
import { useContext } from "react";
import { HexdleContext } from "../Containers/Board";

const Guess = (prop) => {
    const appState = useContext(HexdleContext);

    let placeHolder = Array.from('xxxxxx');
    if (prop.guess.value) {
        placeHolder = prop.guess.value;
        while (placeHolder.length < 6) {
            placeHolder += 'x';
        }
    }
    
    let charArr = [];
    let color = appState.color.split('');
    for (let i = 0; i < placeHolder.length; i++) {
        let styleClass = '';
        if (prop.guess.submitted) {
            if (color[i] === placeHolder[i]) styleClass = 'correct';
            else if (color[i] !== placeHolder[i] && color.indexOf(placeHolder[i]) > -1) styleClass = 'misplaced';
            else styleClass = 'incorrect'
        } else styleClass = 'incorrect';
        charArr.push(<Character key={i} value={placeHolder[i]} index={prop.index} styleClass={styleClass ? styleClass : 'incorrect'} />);
    }
    return (
        <div className="guess">{charArr}</div>
    )
}

export default Guess;