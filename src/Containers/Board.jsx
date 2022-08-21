import { useEffect, useReducer } from 'react';
import { Color } from '../Components/Color';
import { KeyboardContainer } from './KeyboardContainer';
import { GuessContainer } from './GuessContainer';
import { Modal } from '../Components/Modal';
import { HexleContext, initialState, reducer } from '../context';

export const Board = () => {
  let winBool;
  let winText;
  let loseBool;
  let loseText;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'INIT_HEXLE' });
  }, []);

  const handleInput = (e) => {
    const value = e.target.innerText;
    if (value !== 'ENTER') {
      if (value === 'DEL') {
        let curr = state.currentGuess;
        curr = curr.split('');
        curr.pop();
        curr = curr.join('');
      } else {
        if (
          state.currentGuess.length < 6 &&
          !e.target.classList.contains('invalid')
        ) {
        }
      }
    } else {
      // if submitting, evaluate guess
      if (state.currentGuess.length === 6) {
        let guessesArr = state.guesses;
        guessesArr.push({ value: state.currentGuess, submitted: true });
        // evaluate win?
        // winBool = evaluateWin(state.currentGuess, state.color);
        // if out of guesses, display lose message
        if (guessesArr?.length === 6 && !winBool) {
          loseBool = true;
          loseText = {
            header: `Sorry, you're out of guesses`,
            descr: `The hexcode was #${state.color.toUpperCase()}, better luck next time!`,
          };
          window.localStorage.setItem('streak', '0');
        }
        // log to local storage
        if (winBool) {
          window.localStorage.setItem('win', 'true');
          window.localStorage.setItem(
            'winCount',
            (Number(window.localStorage.getItem('winCount')) + 1).toString()
          );
          window.localStorage.setItem(
            'streak',
            (Number(window.localStorage.getItem('streak')) + 1).toString()
          );
        }
        window.localStorage.setItem('guesses', JSON.stringify(guessesArr));
      }
    }
  };

  const closeModal = () => {
    winBool = false;
    loseBool = false;
  };

  return (
    <HexleContext.Provider value={{ state, dispatch }}>
      {winBool ? (
        <Modal
          textObj={winText}
          style={{ height: '200px' }}
          handleClose={closeModal}
        />
      ) : (
        ''
      )}
      {loseBool ? (
        <Modal
          textObj={loseText}
          style={{ height: '200px' }}
          handleClose={closeModal}
        />
      ) : (
        ''
      )}
      <div className='color-container'>
        <Color color={state.color} />
      </div>
      <GuessContainer />
      <KeyboardContainer input={handleInput} />
    </HexleContext.Provider>
  );
};
