//Card holder holds 6 cards (4 times) or 5 cards (6 times)
import { Container } from "./styled";
import Card from "../Card";
const CardHolder = ({ deck }) => {
  return (
    <Container>
      {deck?.map((card, i) => (
        <Card
          rank={card.rank}
          suit={card.suit}
          isDown={card.isDown}
          isHighlighted={card.isHighlighted}
          isSelected={card.isSelected}
          top={20 * i + "px"}
        />
      ))}
    </Container>
  );
};

export default CardHolder;
