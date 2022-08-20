import { useState } from 'react';
import { Modal } from './Modal';

export const Help = () => {
  const [visible, setVisible] = useState(false);
  const textObj = {
    header: 'What is Hexle?',
    descr: `
            Hexle is the combination of hexcode and 'Wordle' (a popular word game by the New York Times).
            Any colors viewed on the web are assigned a 6 character code consisting of numbers 0-9 and
            alphabets A-F. You are shown the color that the hexcode represents and you have six tries
            to guess the hexcode for the color that is displayed.`,
    descr2: `
            When you submit your guess: 
            A yellow box means the character exists in the hexcode but is not in the correct position. 
            A green box means the character exists in the hexcode and is in the correct position.
            A gray box means the character does not exist in the hexcode.
            `,
  };

  return (
    <>
      {visible ? (
        <Modal
          textObj={textObj}
          styleClasses='h-1/3 w-1/2'
          handleClose={() => setVisible(false)}
        />
      ) : (
        ''
      )}
      <button
        className='flex justify-center my-2'
        onClick={() => setVisible(true)}
      >
        &#10068;
      </button>
    </>
  );
};