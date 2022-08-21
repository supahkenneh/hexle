import Character from './Character';

export const Guess = ({ guess, index }) => {
  let guessArr;
  if (!guess.value) {
    guessArr = Array.from('xxxxxx');
  } else {
    guessArr = guess.value.split('');
    while (guessArr.length < 6) {
      guessArr.push('x');
    }
  }
  return (
    <div className='guess'>
      {guessArr.map((char, i) => {
        return <Character key={i} value={char} />;
      })}
    </div>
  );
};
