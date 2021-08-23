import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1%;
  width: 100%;
  min-height: 100%;
  position: absolute;
  border-radius: 10%;
  padding: 6px;
  font-family: "Righteous", cursive;
  background-color: #fff;
  left: 0px;
  top: ${(props) => props.top};
  border: 1px solid black;

  &:hover {
    box-shadow: 4px 4px 4px rgb(247, 210, 0);
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CenteredText = styled.div`
  font-weight: bolder;
  font-size: 7vw;
  margin: 0 auto;
`;

export const StyledText = styled.span`
  font-weight: bolder;
  font-size: 2vw;
`;
