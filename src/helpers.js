
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