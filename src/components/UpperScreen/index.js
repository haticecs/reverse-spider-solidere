import { Container, Remainings, Remainig, StyledImage } from "./styled";
import BackImg from "../../assets/card-back.png";
import SpotImg from "../../assets/card-spot.png";

const UpperScreen = ({ decks /* onClick */ }) => {
  return (
    <Container>
      <Remainings>
        {decks.map((deck, i) => (
          <Remainig
            src={BackImg}
            alt="remaining deck"
            left={i * 10 + "%"}
            deck={deck}
            /*             onClick={onClick(i)}
             */
          />
        ))}
      </Remainings>
      <StyledImage src={SpotImg} />
      <StyledImage src={SpotImg} />
      <StyledImage src={SpotImg} />
      <StyledImage src={SpotImg} />
      <StyledImage src={SpotImg} />
      <StyledImage src={SpotImg} />
      <StyledImage src={SpotImg} />
      <StyledImage src={SpotImg} />
    </Container>
  );
};

export default UpperScreen;
