import { useContext } from "react";
import { HexdleContext } from "../Containers/Board";

const Character = (prop) => {
    const appState = useContext(HexdleContext);
    if (prop.type === 'button') {
        return (
            <div className="character">
                <div className={prop.value === 'ENTER' ? 'keyboard-char enter' : 'keyboard-char'} onClick={prop.click}>
                    {prop.value}
                </div>
            </div>
        )
    } else {
        let style = { class: '' };
        if (appState?.guesses[0]?.correctIdx?.indexOf(appState?.guesses[0]?.value.indexOf(prop.value)) > -1) {
            style['class'] = 'correct';
        } else if (appState?.guesses[0]?.misplacedIdx?.indexOf(appState?.guesses[0]?.value.indexOf(prop.value)) > -1) {
            style['class'] = 'misplaced';
        } else {
            style['class'] = 'incorrect';
        }
        return (
            <div className="character">
                <div className={style.class}>{prop.value && prop.value !== 'x' ? prop.value.toUpperCase() : ' '}</div>
            </div >
        )
    }
}

export default Character;