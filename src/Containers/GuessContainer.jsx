import { Component } from "react";
import Guess from "../Components/Guess";

class GuessContainer extends Component {
    chances;
    constructor() {
        super();
        this.chances = 6;
    }

    render() {
        let guesses = [];
        for (let i = 0; i < this.chances; i++) {
            guesses.push(<Guess key={i} />)
        }
        return (
            <div className="guess-container">{guesses}</div>
        )
    }
}

export default GuessContainer;