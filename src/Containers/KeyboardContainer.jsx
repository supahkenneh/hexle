import { Component } from "react";
import Character from "../Components/Character";

class KeyboardContainer extends Component {
    numberLine;
    alphaLineOne;
    state;

    constructor(prop) {
        super(prop)
        this.state = { ...prop };
        this.numberLine = this.createElementArr(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'DEL']);
        this.alphaLineOne = this.createElementArr(['A', 'B', 'C', 'D', 'E', 'F', 'ENTER']);
    }

    createElementArr(arr) {
        const elementArr = [];
        for (let i = 0; i < arr.length; i++) {
            elementArr.push(<Character value={arr[i]} type="button" key={i} click={this.state.input} />)
        }
        return elementArr;
    }

    render() {
        return (
            <div className="keyboardContainer" >
                <div className="lines">
                    {this.numberLine}
                </div>
                <div className="lines">
                    {this.alphaLineOne}
                </div>
            </div >
        )
    }
}


export default KeyboardContainer;