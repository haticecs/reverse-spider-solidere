//TODO : HIGHEST SCORE(USE MEMO) - RESTART(GAME FLOW)

import { Container, InfoSectionWrapper, StyledText } from "./styled";
import InfoSection from "./info-section";
import useTimer from "../../hooks/useTimer";

const InfoBar = () => {
  //custom hook
  const [hours, minutes, seconds] = useTimer();
  let hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  let minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  let timerText = `${hoursStr}:${minutesStr}:${secondsStr}`;
  return (
    <Container>
      <InfoSectionWrapper>
        <InfoSection Icon="🕓" InfoText={timerText} />
        <InfoSection Icon="🏆" InfoText="0" />
      </InfoSectionWrapper>
      <StyledText>Highest Score Ever: 1450</StyledText>
      <InfoSection
        Icon="🚩"
        InfoText="RESTART"
        isClickable
        onClick={() => console.log("clicked")}
      />
    </Container>
  );
};
export default InfoBar;
