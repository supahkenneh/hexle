import { buildClassStr } from '../helpers';
import { HexleContext } from '../context';
import { useContext } from 'react';

const Character = ({ type, click, value, styleClass }) => {
  const { state, dispatch } = useContext(HexleContext);

  const handleInput = () => {
    dispatch({ type: 'ENTER_CHAR', data: value });
  };

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
        <div className={styleClass}>
          {value && value !== 'x' ? value.toUpperCase() : ' '}
        </div>
      </div>
    );
  }
};

export default Character;
