
// generate a random color to display
export const generateColor = () => {
    let color = '';
    let colorChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        let value = colorChars[index];
        color += value.toUpperCase();
    }
    return color;
}

export const buildClassStr = (type, value, styleClass) => {
    let classes = '';
    if (type === 'button') {
        classes += 'keyboard-char';
        if (value === 'ENTER') classes += ' enter';
        if (value === 'DEL') classes += ' delete';
        if (styleClass === 'invalid') classes += ' invalid';
    }
    return classes;
}

export const evaluateGuess = (guess, color) => guess.value === color;

export const evaluatePosition = (color, char, i) => {
    const colorIdx = color.indexOf(char);
    if (colorIdx === -1) return 'incorrect';
    if (color[i] === char) return 'correct';
    return 'misplaced';
}

export const getText = (state) => {
    const text = {
        header: `${state.win ? 'Congratulations!' : 'Sorry, you\'re out of guesses'}`,
        descr: `${state.win ? `You got the Hexle in ${state.guesses.filter(guess => guess.value.length === 6 && guess.submitted).length}/6 attempts!` : `The hexcode was #${state.color.toUpperCase()}, better luck next time!`}`,
        descr2: `${state.win ? `Your current streak is ${JSON.parse(window.localStorage.getItem('win-history')).streak}` : ''}`
    }
    return text;
}

export const ENTER = 'ENTER';
export const DELETE = 'DEL';