const Character = (prop) => {
    if (prop.type === 'button') {
        const classes = buildClassStr(prop);
        return (
            <div className="character">
                <div className={classes} onClick={prop.click}>
                    {prop.value}
                </div>
            </div>
        )
    } else {
        return (
            <div className="character">
                <div className={prop.styleClass}>{prop.value && prop.value !== 'x' ? prop.value.toUpperCase() : ' '}</div>
            </div >
        )
    }
}

export default Character;

function buildClassStr(prop) {
    let classes = '';
    if (prop.type === 'button') {
        classes += 'keyboard-char';
        if (prop.value === 'ENTER') classes += ' enter';
        if (prop.value === 'DEL') classes += ' delete';
        if (prop.styleClass === 'invalid') classes += ' invalid';
    }
    return classes;
}