import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 30px;
  gap: 20px;

  background-color: #fff;
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const Input = styled.input<{ buttonError: boolean }>`
  height: 30px;
  width: 100%;
  padding: 10px;

  border: ${({ buttonError }) => (buttonError ? "2px solid red" : null)};

  :focus {
    border: 2px solid transparent;
  }
`;

export const ButtonPassword = styled.button`
  display: flex;
  justify-content: flex-end;

  background-color: transparent;
  border: none;
`;

export const ButtonSubmit = styled.button`
  height: 50px;
  font-size: larger;

  border-radius: 5px;
  background-color: #141414;
  color: #fff;

  :hover {
    background-color: #fff;
    color: #141414;
  }
`;

export const P = styled.p`
  color: red;
  font-size: 14;
`;
