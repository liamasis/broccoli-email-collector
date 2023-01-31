import "./App.css";
import Popup from "./components/Popup";
function App() {
  return (
    <div className="App">
      <div>
        <h1 className="App-header">A better way to enjoy every day.</h1>
        <p>Be the first to find out when we launch.</p>
      </div>
      <Popup text="Subscribe to email" />
    </div>
  );
}

export default App;
