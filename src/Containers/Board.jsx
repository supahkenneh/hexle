import { Component, Fragment, createContext } from "react";
import Color from "../Components/Color";
import KeyboardContainer from "./KeyboardContainer";
import GuessContainer from "./GuessContainer";
import Win from "../Components/Win";

export const HexdleContext = createContext();

class Board extends Component {
    state;
    winBool;
    constructor() {
        super();
        this.state = {
            color: '',
            currentGuess: '',
            guesses: [],
        };
    }

    componentDidMount() {
        const color = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
        this.setState({ color });
    }

    handleInput = e => {
        const value = e.target.innerText;
        if (value !== 'ENTER') {
            if (value === 'DEL') {
                let curr = this.state.currentGuess;
                curr = curr.split('');
                curr.pop();
                curr = curr.join('');
                this.setState({ ...this.state, currentGuess: curr })
            } else {
                if (this.state.currentGuess.length < 6) {
                    this.setState({ ...this.state, currentGuess: this.state.currentGuess + value })
                }
            }
        } else {
            // if submitting, evaluate guess
            if (this.state.currentGuess.length === 6) {
                let guessesArr = this.state.guesses;
                guessesArr.push({ value: this.state.currentGuess, submitted: true });
                // evaluate win?
                this.winBool = this.evaluateWin(this.state.currentGuess, this.state.color);
                this.setState({ ...this.state, currentGuess: '', guesses: guessesArr });
            }
        }
    }

    evaluateWin(guess, color) {
        return guess === color;
    }

    render() {
        return (
            <Fragment>
                {this.winBool ? <Win attempts={this.state.guesses.length} /> : ''}
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