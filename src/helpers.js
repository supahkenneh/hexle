
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

export const evaluateGuess = (guess, color) => {
    // winText = {
    //   header: 'Congratulations!',
    //   descr: `You got the Hexle in ${
    //     state.guesses?.length
    //   }/6 attempts! \n Your current streak is ${window.localStorage.getItem(
    //     'streak'
    //   )}`,
    // };
    return guess === color;
}

export const evaluatePosition = (color, char, i) => {
    const colorIdx = color.indexOf(char);
    switch (true) {
        case colorIdx === i:
            return 'correct';
        case colorIdx !== i && colorIdx > -1:
            return 'misplaced';
        default:
            return 'incorrect';
    }
}

export const ENTER = 'ENTER';
export const DELETE = 'DEL';