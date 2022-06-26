const Character = (prop) => {

    if (prop.type === 'button') {
        return (
            <div className="character">
                <div className={prop.value === 'ENTER' ? 'keyboard-char enter' : 'keyboard-char'} onClick={prop.click}>
                    {prop.value}
                </div>
            </div>
        )
    } else {
        return (
            <div className="character">
                <div>{prop.value ? prop.value.toUpperCase() : ' '}</div>
            </div>
        )
    }
}

export default Character;