import './App.css';
import Icon from './components/Icon/icon';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Icon icon='home' size={100} color='orange' />
      <Icon icon='settings' size={100} color='pink' />
    </div>
  );
}

export default App;
