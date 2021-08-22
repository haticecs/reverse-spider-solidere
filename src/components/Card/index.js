//Card Props: Type, Suit and isBack

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

const Card = ({ Type, Suit, isBack }) => {
  return isBack ? (
    <CardWrapper style={{ padding: 0 }}>
      <img src={BackImg} alt={Type} style={{ flex: 1 }} />
    </CardWrapper>
  ) : (
    <CardWrapper>
      <HeaderWrapper>
        <StyledText>{Type}</StyledText>
        <img src={imageHandler(Suit)} alt={Type} width={30} height={30} />
      </HeaderWrapper>
      <CenteredText>{Type}</CenteredText>
    </CardWrapper>
  );
};

export default Card;
