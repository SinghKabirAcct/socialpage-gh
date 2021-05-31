import logo from './logo.svg';
import logoLarge from './logoLarge.svg'
import './App.css';
import firebase from "firebase/app";

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyBQGqBIkMCj-_JKbYtCp5EUGDEatiOTfsQ",
  authDomain: "socialpage-73c8d.firebaseapp.com",
  databaseURL: "https://socialpage-73c8d-default-rtdb.firebaseio.com",
  projectId: "socialpage-73c8d",
  storageBucket: "socialpage-73c8d.appspot.com",
  messagingSenderId: "488443466029",
  appId: "1:488443466029:web:de510d89f8616792bec3a4",
  measurementId: "G-966N51VN10"
};

firebase.initializeApp(firebaseConfig)

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