import { Component, Fragment, createContext } from "react";
import Color from "../Components/Color";
import KeyboardContainer from "./KeyboardContainer";
import GuessContainer from "./GuessContainer";

export const HexdleContext = createContext();

class Board extends Component {
    state;
    constructor() {
        super();
        this.state = {
            color: '',
            currentGuess: '',
            guesses: []
        };
    }

    componentDidMount() {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        this.setState({ color });
    }

    handleInput = e => {
        const value = e.target.innerText;
        if (this.state.currentGuess.length < 6) {
            this.setState({ ...this.state, currentGuess: this.state.currentGuess += value })
        } else {
            let guess = this.state.currentGuess;
            let guessesArr = this.state.guesses;
            guessesArr.push(guess);
            this.setState({ ... this.state, currentGuess: value, guesses: guessesArr });
        }
    }

    render() {
        return (
            <Fragment>
                <HexdleContext.Provider value={this.state}>
                    <div className="color-container">
                        <Color color={this.state.color} />
                    </div>
                    <GuessContainer data={this.state.data} />
                    <KeyboardContainer input={this.handleInput} />
                </HexdleContext.Provider>
            </Fragment>
        )
    }
}

export default Board;