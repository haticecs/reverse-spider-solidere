import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Remainings = styled.div`
  width: 20%;
  margin: 1%;
  position: relative;
`;
export const Remainig = styled.img`
  display: flex;
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  top: 0px;
  border-radius: 10%;
  left: ${(props) => props.left};
`;

export const StyledImage = styled.img`
  width: 8%;
  margin: 1%;
  height: auto;
  border-radius: 10%;
`;
