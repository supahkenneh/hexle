import { createContext } from "react";
import { generateColor, evaluateGuess, ENTER, DELETE } from "./helpers";

export const initialState = {
    color: '',
    guesses: [{ value: '', submitted: false }, { value: '', submitted: false }, { value: '', submitted: false }, { value: '', submitted: false }, { value: '', submitted: false }, { value: '', submitted: false }],
    win: false,
    showScore: false,
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
            let winHistory = JSON.parse(window.localStorage.getItem('win-history'));
            const win = winHistory.win;
            const showScore = false;
            if (!winHistory) window.localStorage.setItem('win-history', JSON.stringify({ winCount: 0, streak: 0 }))
            let guesses = JSON.parse(window.localStorage.getItem('guesses'));
            return { color, guesses: !guesses ? initialState.guesses : guesses, win, showScore };
        case 'ENTER_CHAR':
            const { data } = action;
            if (data !== ENTER && data !== DELETE) {
                if (!state.win) {
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
                } else {
                    state.showScore = true;
                }
            }
            if (data === ENTER) {
                const submittedGuess = state.guesses.find(guess => guess.submitted === false && guess.value.length === 6)
                if (submittedGuess) {
                    submittedGuess.submitted = true;
                    const winHistory = JSON.parse(window.localStorage.getItem('win-history'));
                    if (evaluateGuess(submittedGuess, state.color)) {
                        state.win = true;
                        winHistory['win'] = true;
                        winHistory['winCount'] = winHistory['winCount'] ? 1 : winHistory['winCount'] + 1;
                        winHistory['streak'] = winHistory['streak'] ? 1 : winHistory['streak'] + 1;
                        state.showScore = true;
                    } else if (state.guesses.filter(guess => guess.value.length === 6 && guess.submitted).length === 6) {
                        winHistory['streak'] = 0;
                        state.showScore = true;
                    }
                    window.localStorage.setItem('win-history', JSON.stringify(winHistory));
                }
            }
            if (data === DELETE) {
                let lastGuess = state.guesses.find(guess => !guess.submitted);
                lastGuess.value = lastGuess.value.slice(0, -1);
            }
            window.localStorage.setItem('guesses', JSON.stringify(state.guesses));
            return { ...state };
        case 'HIDE_SCORE':
            state.showScore = false;
            return { ...state }
        default:
            break;
    }
}