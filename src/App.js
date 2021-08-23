import "./App.css";
import { useEffect, useState } from "react";
import Components from "./components";
import { populateOneSuitCards } from "./logic/Game";
function App() {
  const [remainingDecks, setRemainingDecks] = useState([]);
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const infoObj = populateOneSuitCards();
    setDecks(infoObj.decks);
    setRemainingDecks(infoObj.remainingDecks);
  }, []);

  /*   const onClickHandler = (i) => {
    remainingDecks[i].map((card, i) => decks[i].push(card));
  };
 */
  return (
    <div className="App">
      <Components.InfoBar />
      <Components.UpperScreen
        /* onClick={onClickHandler} */ decks={remainingDecks}
      />
      <Components.GameScreen decks={decks} />
    </div>
  );
}

export default App;
