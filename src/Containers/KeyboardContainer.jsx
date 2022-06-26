import Character from "../Components/Character";

const KeyboardContainer = (prop) => {

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];
    const lineOne = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const lineTwo = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const lineThree = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    const numberLine = createElementArr(numbers);
    const alphaLineOne = createElementArr(lineOne);
    const alphaLineTwo = createElementArr(lineTwo);
    const alphaLineThree = createElementArr(lineThree);

    return (
        <div className="keyboardContainer">
            <div className="lines">{numberLine}</div>
            <div className="lines">{alphaLineOne}</div>
            <div className="lines">{alphaLineTwo}</div>
            <div className="lines">{alphaLineThree}</div>
        </div>
    )
}

function createElementArr(arr) {
    const elementArr = [];
    for (let i = 0; i < arr.length; i++) {
        elementArr.push(<Character value={arr[i]} type="button" key={i} />)
    }
    return elementArr;
}

export default KeyboardContainer;