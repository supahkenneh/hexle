import { useEffect, useReducer } from 'react';
import { Color } from '../Components/Color';
import { KeyboardContainer } from './KeyboardContainer';
import { GuessContainer } from './GuessContainer';
import { Modal } from '../Components/Modal';
import { HexleContext, initialState, reducer } from '../context';
import { getText } from '../helpers';

export const Board = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: 'INIT_HEXLE' });
  }, []);

  const closeModal = () => {
    dispatch({ type: 'HIDE_SCORE' });
  };

  return (
    <HexleContext.Provider value={{ state, dispatch }}>
      {state.showScore ? (
        <Modal
          textObj={getText(state)}
          styleClasses='h-1/3 w-1/2'
          handleClose={() => closeModal()}
        />
      ) : (
        ''
      )}
      <div className='color-container'>
        <Color color={state.color} />
      </div>
      <GuessContainer />
      <KeyboardContainer />
    </HexleContext.Provider>
  );
};
