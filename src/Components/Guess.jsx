import Character from "./Character";

const Guess = (prop) => {
    let placeHolder = Array.from('xxxxxx');
    if (prop.guess.value) {
        placeHolder = prop.guess.value;
        while (placeHolder.length < 6) {
            placeHolder += 'x';
        }
    }
    let charArr = [];
    for (let i = 0; i < placeHolder.length; i++) {
        charArr.push(<Character key={i} value={placeHolder[i]} index={prop.index} />);
    }
    return (
        <div className="guess">{charArr}</div>
    )
}

export default Guess;