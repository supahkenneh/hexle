const Modal = (prop) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="content">
                    <h2>{prop.textObj.header}</h2>
                    <div>{prop.textObj.descr}</div>
                    <br />
                    <div>{prop.textObj.descr2}</div>
                    <br />
                    <span className="close" onClick={prop.handleClose}>X</span>
                </div>
            </div>
        </div>
    )
}

export default Modal;