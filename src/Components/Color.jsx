export const Color = ({ color }) => {
  return (
    <div
      className='h-52 w-52 rounded-xl'
      style={{ backgroundColor: `#${color}` }}
    ></div>
  );
};
