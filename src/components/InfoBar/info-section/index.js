/* InfoSection is used in the InfoBar 3 times
Info Section Props: Icon, InfoText, isClickable, onClick
 */
import {
  InfoContainer,
  IconWrapper,
  InfoWrapper,
  CustomButton,
  StyledText,
} from "./styled";

const InfoSection = ({ Icon, InfoText, isClickable, onClick }) => (
  <InfoContainer>
    <IconWrapper>{Icon}</IconWrapper>
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
