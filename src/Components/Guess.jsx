import Character from "./Character";

const Guess = (prop) => {
    let charArr = [];
    for (let i = 0; i < 6; i++) {
        charArr.push(<Character key={i} value={prop.guess[i]} />);
    }
    return (
        <div className="guess">{charArr}</div>
    )
}

export default Guess;