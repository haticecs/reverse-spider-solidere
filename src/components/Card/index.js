//Card Props: Type and Suit -> Draggable Card
import { ItemTypes } from "./constants";
import { CardWrapper, CenteredText, HeaderWrapper, StyledText } from "./styled";

import HeartImg from "../../assets/heart.png";
import DiamondImg from "../../assets/diamond.png";
import ClubsImg from "../../assets/clubs.png";
import SpadesImg from "../../assets/spades.png";
import BackImg from "../../assets/card-back.png";

const imageHandler = (Suit) => {
  if (Suit === "heart") return HeartImg;
  else if (Suit === "diamond") return DiamondImg;
  else if (Suit === "clubs") return ClubsImg;
  else return SpadesImg;
};

const Card = ({ rank, suit, top, isBack }) => {
  return isBack ? (
    <CardWrapper style={{ padding: 0 }}>
      <img src={BackImg} alt={rank} style={{ flex: 1 }} />
    </CardWrapper>
  ) : (
    <CardWrapper top={top}>
      <HeaderWrapper>
        <StyledText>{rank}</StyledText>
        <img src={imageHandler(suit)} alt={rank} width={30} height={30} />
      </HeaderWrapper>
      <CenteredText>{rank}</CenteredText>
    </CardWrapper>
  );
};

export default Card;
