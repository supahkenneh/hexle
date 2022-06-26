const Character = (prop) => {
    return (
        <div className="character">
            <div>{prop.value.toUpperCase()}</div>
        </div>
    )
}

export default Character;