import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 25px;

  color: white;
`;

export const Button = styled.button`
  height: 50px;
  width: 200px;

  border-radius: 10px;

  :hover {
    background-color: #145464;
    color: #fff;
  }
`;
