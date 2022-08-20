export const Modal = ({
  textObj: { header, descr, descr2 },
  handleClose,
  styleClasses,
}) => {
  return (
    <div className='modal'>
      <div className={`modal-content ${styleClasses}`}>
        <div className='content'>
          <div className='flex justify-end'>
            <div
              className='hover:cursor-pointer text-xl px-2'
              onClick={handleClose}
            >
              ✖
            </div>
          </div>
          <h2 className='text-xl font-bold mb-4'>{header}</h2>
          <div className='mb-4'>{descr}</div>
          <div className='mb-4'>{descr2}</div>
        </div>
      </div>
    </div>
  );
};
