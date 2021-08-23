//Card holder holds 6 cards (4 times) or 5 cards (6 times)
import { Container } from "./styled";
import Card from "../Card";
const CardHolder = ({ deck }) => {
  return (
    <Container>
      <Card rank="K" suit="diamond" top="0px" />
      <Card rank="K" suit="diamond" top="10px" />
      <Card rank="K" suit="diamond" top="20px" />
      <Card rank="K" suit="diamond" top="30px" />
      <Card rank="K" suit="diamond" top="40px" />
      <Card rank="K" suit="diamond" top="50px" />
    </Container>
  );
};

export default CardHolder;
