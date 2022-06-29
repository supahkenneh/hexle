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
        let color = '';
        let storedDate = window.localStorage.getItem('date');
        let today = new Date();
        today = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
        if (!storedDate) {
            // store today's date if no stored date
            window.localStorage.setItem('date', today);
        } else if (storedDate !== today) {
            // new day - generate new color and store in browser
            color = this.generateColor();
            this.setState({ color });
            window.localStorage.setItem('color', color);
            window.localStorage.setItem('date', today);
        } else if (storedDate === today) {
            // if same day, get today's color
            color = window.localStorage.getItem('color');
            if (!color) {
                color = this.generateColor();
                this.setState({ color });
                window.localStorage.setItem('color', color);
            } else {
                this.setState({ color });
            }
        }
    }

    generateColor() {
        let color = '';
        let colorChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * 16)
            let value = colorChars[index]
            color += value.toUpperCase();
        }
        return color;
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
                if (guessesArr.length === 6 && !this.winBool) {
                    this.loseBool = true;
                    this.loseText = { header: `Sorry, you're out of guesses`, descr: `The hexcode was #${this.state.color.toUpperCase()}, better luck next time!` };
                    window.localStorage.setItem('streak', '0');
                }
                // log to local storage
                if (this.winBool) {
                    window.localStorage.setItem('win', 'true')
                    window.localStorage.setItem('winCount', (Number(window.localStorage.getItem('winCount')) + 1).toString());
                    window.localStorage.setItem('streak', (Number(window.localStorage.getItem('streak')) + 1).toString());
                };
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