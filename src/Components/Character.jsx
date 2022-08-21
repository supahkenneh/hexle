import { buildClassStr, evaluatePosition } from '../helpers';
import { HexleContext } from '../context';
import { useContext, useState } from 'react';

const Character = ({ type, value, styleClass, index, submitted }) => {
  //   const [position, setPosition] = useState('');
  const { state, dispatch } = useContext(HexleContext);
  const handleInput = () => {
    dispatch({ type: 'ENTER_CHAR', data: value });
  };

  let position = '';
  if (type === 'guess' && submitted) {
    const { color } = state;
    const colorArr = color.split('');
    position = evaluatePosition(colorArr, value, index);
  }

  if (type === 'button') {
    const classes = buildClassStr(type, value, styleClass);
    return (
      <div className='character hover:cursor-pointer'>
        <div className={classes} onClick={() => handleInput()}>
          {value}
        </div>
      </div>
    );
  } else {
    return (
      <div className='character'>
        <div
          className={
            position === 'correct'
              ? 'bg-correct'
              : position === 'misplaced'
              ? 'bg-misplaced'
              : 'bg-incorrect'
          }
        >
          {value && value !== 'x' ? value.toUpperCase() : ' '}
        </div>
      </div>
    );
  }
};

export default Character;
