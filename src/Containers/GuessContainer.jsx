import { useContext } from 'react';
import Guess from '../Components/Guess';
import { HexleContext } from '../context';

const GuessContainer = (props) => {
  const { state } = useContext(HexleContext);
  let concatGuesses = [];
  state.guesses?.forEach((guess) => {
    concatGuesses.push(guess);
  });
  concatGuesses.push({ value: state.currentGuess, submitted: false });
  while (concatGuesses.length < 6) {
    concatGuesses.push({ value: '', submitted: false });
  }
  let guessesArr = [];
  if (concatGuesses.length > 6) concatGuesses.pop();
  for (let i = 0; i < concatGuesses.length; i++) {
    guessesArr.push(<Guess guess={concatGuesses[i]} key={i} index={i} />);
  }
  return <div className='guess-container'>{guessesArr}</div>;
};

export default GuessContainer;
