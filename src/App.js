import "./App.css";
import Components from "./components";

function App() {
  return (
    <div className="App">
      <Components.InfoBar />
      <Components.UpperScreen />
      <Components.GameScreen />
    </div>
  );
}

export default App;
