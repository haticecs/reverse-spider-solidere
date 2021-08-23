import { Container } from "./styled";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CardHolder from "../CardHolder";
const GameScreen = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <CardHolder id="holder1" />
        <CardHolder id="holder2" />
        <CardHolder id="holder3" />
        <CardHolder id="holder4" />
        <CardHolder id="holder5" />
        <CardHolder id="holder6" />
        <CardHolder id="holder7" />
        <CardHolder id="holder8" />
        <CardHolder id="holder9" />
        <CardHolder id="holder10" />
      </Container>
    </DndProvider>
  );
};

export default GameScreen;
