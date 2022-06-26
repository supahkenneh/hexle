import { Component } from "react";
import Character from "../Components/Character";

class KeyboardContainer extends Component {
    numberLine;
    alphaLineOne;
    alphaLineTwo;
    alphaLineThree;
    state;

    constructor(prop) {
        super(prop)
        this.state = { ...prop };
        this.numberLine = this.createElementArr(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]);
        this.alphaLineOne = this.createElementArr(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']);
        this.alphaLineTwo = this.createElementArr(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'ENTER']);
        this.alphaLineThree = this.createElementArr(['Z', 'X', 'C', 'V', 'B', 'N', 'M']);
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
                <div className="lines">
                    {this.alphaLineTwo}
                </div>
                <div className="lines">
                    {this.alphaLineThree}
                </div>
            </div >
        )
    }
}


export default KeyboardContainer;