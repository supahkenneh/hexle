import './App.css';
import Board from './Containers/Board';
import Help from './Components/Help';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HEXLE</h1>
        <div className="etc-container">
          <Help />
        </div>
        <Board />
      </header>
    </div>
  );
}

export default App;
