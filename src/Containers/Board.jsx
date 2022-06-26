import { Component, Fragment } from "react";
import Color from "../Components/Color";
import KeyboardContainer from "./KeyboardContainer";
import GuessContainer from "./GuessContainer";

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
                <GuessContainer />
                <KeyboardContainer />
            </Fragment>
        )
    }
}

export default Board;