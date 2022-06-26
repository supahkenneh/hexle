import { Component } from "react";

class Character extends Component {
    state;
    constructor(prop) {
        super(prop);
        this.state = { value: prop.value, type: prop.type };
    }

    handleInput(e) {
        console.log(e.target.outerText);
    }

    render() {
        if (this.state.type === 'button') {
            return (
                <div className="character">
                    <button className="keyboard-button" onClick={this.handleInput}>{this.state.value ? this.state.value : ' '}</button>
                </div>
            )
        } else {
            return (
                <div className="character">
                    <div>{this.state.value ? this.state.value.toUpperCase() : ' '}</div>
                </div>
            )
        }
    }
}

export default Character;