import { Component, Fragment } from "react";
import Modal from "./Modal";

class Help extends Component {
    state;
    textObj;
    styleObj;
    constructor() {
        super();
        this.state = { visible: false }
        this.textObj = {
            header: 'What is Hexle?',
            descr: `
            Hexle is the combination of hexcode and 'Wordle' (a popular word game by the New York Times).
            Any colors viewed on the web are assigned a 6 character code consisting of numbers 0-9 and
            alphabets A-F. You are shown the color that the hexcode represents and you have six tries
            to guess the hexcode for the color that is displayed.`,
            descr2: `
            When you submit your guess: 
            A yellow box means the character exists in the hexcode but is not in the correct position. 
            A green box means the character exists in the hexcode and is in the correct position.
            A gray box means the character does not exist in the hexcode.
            `
        };
    };

    toggleHelpText = () => {
        this.setState({ visible: true });
    }

    closeModal = () => {
        this.setState({ visible: false });
    }

    render() {
        return (
            <Fragment>
                {this.state.visible ? <Modal textObj={this.textObj} style={{ height: '400px' }} handleClose={this.closeModal} /> : ''}
                <button className="help-icon" onClick={this.toggleHelpText}>❔</button>
            </Fragment >
        )
    }
}

export default Help;