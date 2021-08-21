import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100px;
  height: 150px;
  border-radius: 6px;
  padding: 6px;
  border: 1px solid black;
  font-family: "Righteous", cursive;
  background-color: #fff;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CenteredText = styled.div`
  font-weight: bolder;
  font-size: 80px;
`;

export const StyledText = styled.span`
  font-weight: bolder;
  font-size: 30px;
`;
