import { useContext } from 'react';
import { HexleContext } from '../context';
import { Guess } from '../Components/Guess';

export const GuessContainer = () => {
  const { state } = useContext(HexleContext);
  return (
    <>
      {state.guesses?.map((guess, i) => {
        return <Guess guess={guess} key={i} index={i} />;
      })}
    </>
  );
};
