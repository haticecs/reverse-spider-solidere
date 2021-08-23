import { Container, RemainingCards, RemainigCard, StyledImage } from "./styled";
import BackImg from "../../assets/card-back.png";
import SpotImg from "../../assets/card-spot.png";

const UpperScreen = () => {
  return (
    <Container>
      <RemainingCards>
        <RemainigCard src={BackImg} alt="remaining deck" left="0px" />
        <RemainigCard src={BackImg} alt="remaining deck" left="10%" />
        <RemainigCard src={BackImg} alt="remaining deck" left="20%" />
        <RemainigCard src={BackImg} alt="remaining deck" left="30%" />
        <RemainigCard src={BackImg} alt="remaining deck" left="40%" />
      </RemainingCards>
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
