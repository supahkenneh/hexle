import './App.css';
import Board from './Containers/Board';
import Help from './Components/Help';

function App() {
  return (
    <div className='App h-screen'>
      <header className='flex flex-col py-2'>
        <h1 className='text-5xl font-bold tracking-widest'>HEXLE</h1>
        <Help />
      </header>
      <Board />
    </div>
  );
}

export default App;
