import { createContext } from "react";
import { generateColor } from "./helpers";

export const initialState = { color: '', guesses: [] };

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
            return { color, guesses: !guesses ? [] : guesses };
        case 'ENTER_CHAR':
            const { data } = action;
            if (!state.guesses.length) {
                state.guesses.push(data);
            } else {
                let lastGuess = state.guesses[state.guesses.length - 1];
                if (lastGuess.length < 6) {
                    lastGuess += data;
                    state.guesses[state.guesses.length - 1] = lastGuess;
                } else {
                    state.guesses.push(data);
                }
            }
            return state;
        default:
            break;
    }
}