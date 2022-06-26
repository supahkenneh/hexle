import { Component, Fragment } from "react";
import Color from "../Components/Color";
import Character from "../Components/Character";

class Board extends Component {
    state;

    constructor() {
        super();
        this.state = { color: '' };
    }

    componentDidMount() {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        this.setState({ color });
    }

    render() {
        return (
            <Fragment>
                <div className="color-container">
                    <Color color={this.state.color} />
                </div>
                <div className="character-container">
                    {this.state.color.split('').map(char => {
                        return <Character value={char} />
                    })}
                </div>
                <div className="keyboard-container">
                    <div>keyboard</div>
                </div>
            </Fragment>
        )
    }
}

export default Board;