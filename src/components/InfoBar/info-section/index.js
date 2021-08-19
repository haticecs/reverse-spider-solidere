import {
  InfoContainer,
  IconWrapper,
  InfoWrapper,
  CustomButton,
} from "./styled";
import { StyledText } from "../../styled-text/styled";

const InfoSection = ({ Icon, InfoText, color, isClickable, onClick }) => (
  <InfoContainer>
    <IconWrapper color={color}>
      <Icon />
    </IconWrapper>
    {isClickable ? (
      <CustomButton onClick={onClick}>
        <StyledText>{InfoText}</StyledText>
      </CustomButton>
    ) : (
      <InfoWrapper>
        <StyledText>{InfoText}</StyledText>
      </InfoWrapper>
    )}
  </InfoContainer>
);
export default InfoSection;
