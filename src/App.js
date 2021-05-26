import logo from './logo.svg';
import logoLarge from './logoLarge.svg'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-logo">{"{Socialpage}"}</p>
      </header>
      <div className="body">
        <p className="minhThu">Hello Minh Thu LOL</p>
        <div className="inputClass">
          <input type="text" className="messageInput" placeholder="💬 What do you want to send?"></input>
        </div>
      </div>
    </div>
  );
}

export default App;