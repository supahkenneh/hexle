import { createContext } from "react";
import { generateColor, evaluateGuess, ENTER, DELETE } from "./helpers";

export const initialState = {
    color: '',
    guesses: [{ value: '', submitted: false }, { value: '', submitted: false }, { value: '', submitted: false }, { value: '', submitted: false }, { value: '', submitted: false }, { value: '', submitted: false }],
    win: false
};

export const HexleContext = createContext();

export const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT_HEXLE':
            // check local storage for color
            let color = '';
            let storedDate = window.localStorage.getItem('date');
            let today = new Date();
            today = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
            if (!storedDate) {
                // store today's date if no stored date
                window.localStorage.setItem('date', today);
            } else if (storedDate !== today) {
                // new day - generate new color and store in browser
                color = generateColor();
                window.localStorage.setItem('color', color);
                window.localStorage.setItem('date', today);
                window.localStorage.removeItem('guesses');
            } else if (storedDate === today) {
                // if same day, get today's color
                color = window.localStorage.getItem('color');
                if (!color) {
                    color = generateColor();
                    window.localStorage.setItem('color', color);
                }
            }
            let guesses = JSON.parse(window.localStorage.getItem('guesses'));
            return { color, guesses: !guesses ? initialState.guesses : guesses, win: false };
        case 'ENTER_CHAR':
            const { data } = action;
            if (data !== ENTER && data !== DELETE) {
                for (let i = 0; i < state.guesses.length; i++) {
                    if (state.guesses[i].value.length < 6) {
                        if (i > 0 && !state.guesses[i - 1].submitted) {
                            break;
                        } else {
                            state.guesses[i].value += data;
                        }
                        break;
                    }
                }
            }
            if (data === ENTER) {
                const submittedGuess = state.guesses.find(guess => guess.submitted === false && guess.value.length === 6)
                if (submittedGuess) {
                    submittedGuess.submitted = true;
                    if (evaluateGuess(submittedGuess, state.color)) {
                        state.win = true;
                    }
                }
            }
            if (data === DELETE) {
                let lastGuess = state.guesses.find(guess => !guess.submitted);
                lastGuess.value = lastGuess.value.slice(0, -1);
            }
            window.localStorage.setItem('guesses', JSON.stringify(state.guesses));
            return { ...state };
        default:
            break;
    }
}