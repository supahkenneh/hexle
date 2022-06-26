import Character from "./Character";

const Guess = (prop) => {
    const characters = 6;

    let charArr = [];
    for (let i = 0; i < characters; i++) {
        charArr.push(<Character key={i}/>);
    }
    return (
        <div>{charArr}</div>
    )
}

export default Guess;