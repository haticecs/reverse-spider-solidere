//TODO: Implement TIMER
//SCORE STATE
//HIGHEST SCORE(USE MEMO)
//RESTART(GAME FLOW)

import { Container, InfoSectionWrapper } from "./styled";
import { StyledText } from "../styled-text/styled";
import InfoSection from "./info-section";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import LoopIcon from "@material-ui/icons/Loop";
import useTimer from "../hooks/useTimer";

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
        <InfoSection Icon={AvTimerIcon} InfoText={timerText} color="#E10600" />
        <InfoSection Icon={EmojiEventsIcon} InfoText="0" color="#E10600" />
      </InfoSectionWrapper>
      <StyledText>Highest Score Ever: 1450</StyledText>
      <InfoSection
        Icon={LoopIcon}
        InfoText="RESTART"
        color="#E10600"
        isClickable
        onClick={() => console.log("clicked")}
      />
    </Container>
  );
};
export default InfoBar;
