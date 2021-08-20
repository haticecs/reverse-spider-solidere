import {
  InfoContainer,
  IconWrapper,
  InfoWrapper,
  CustomButton,
  StyledText,
} from "./styled";

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
