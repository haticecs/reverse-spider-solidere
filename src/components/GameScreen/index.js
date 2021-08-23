import CardHolder from "../CardHolder";
import { Container } from "./styled";

const GameScreen = ({ decks }) => {
  return (
    <Container>
      {decks.map((deck, i) => (
        <CardHolder id={"holder" + i} deck={deck} />
      ))}
    </Container>
  );
};

export default GameScreen;
