const Win = (prop) => {
    return (
        <div className="win-modal">
            <div className="win-modal-content">
                <div className="content">
                    <h2>Congratulations!</h2>
                    <div>You got the Hexle in {prop.attempts}/6 attempts!</div>
                </div>
            </div>
        </div>
    )
}

export default Win;