import { Component, Fragment, createContext } from "react";
import Color from "../Components/Color";
import KeyboardContainer from "./KeyboardContainer";
import GuessContainer from "./GuessContainer";
import Modal from "../Components/Modal";

export const HexdleContext = createContext();

class Board extends Component {
    state;
    winBool;
    winText;
    loseBool;
    loseText;
    constructor() {
        super();
        this.state = {
            color: '',
            currentGuess: '',
            guesses: [],
        };
    }

    componentDidMount() {
        let colorChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        let color = '';
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * 16)
            let value = colorChars[index]
            color += value
        }
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
                // if out of guesses, display lose message
                if (guessesArr.length === 6) {
                    this.loseBool = true;
                    this.loseText = { header: `Sorry, you're out of guesses`, descr: `The hexcode was #${this.state.color.toUpperCase()}, better luck next time!` };
                }
                this.setState({ ...this.state, currentGuess: '', guesses: guessesArr });
            }
        }
    }

    evaluateWin(guess, color) {
        this.winText = { header: 'Congratulations!', descr: `You got the Hexle in ${this.state.guesses.length}/6 attempts!` };
        return guess === color;
    }

    closeModal = () => {
        this.winBool = false;
        this.loseBool = false;
        this.setState({ ...this.state });
    }

    render() {
        return (
            <Fragment>
                <HexdleContext.Provider value={this.state}>
                    {this.winBool ? <Modal textObj={this.winText} style={{ height: '200px' }} handleClose={this.closeModal} /> : ''}
                    {this.loseBool ? <Modal textObj={this.loseText} style={{ height: '200px' }} handleClose={this.closeModal} /> : ''}
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