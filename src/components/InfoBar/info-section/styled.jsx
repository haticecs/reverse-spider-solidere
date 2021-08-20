import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  color: ${(props) => props.color};
`;

export const InfoWrapper = styled.div`
  border-radius: 5px;
  background: linear-gradient(to right, #ffff88 0%, #ffff88 100%);
  padding: 5px;
`;

export const CustomButton = styled.button`
  border-radius: 5px;
  background: linear-gradient(to right, #ffff88 0%, #ffff88 100%);
  padding: 5px;
  cursor: pointer;
`;
export const StyledText = styled.div`
  font-weight: bolder;
  justify-self: center;
`;
