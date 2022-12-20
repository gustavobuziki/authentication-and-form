import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

import * as s from "./styled-home";

const Home = () => {
  const { logOut, userData } = useContext(AuthContext);

  return (
    <s.Container>
      <s.Main>
        <p>Bem vindo {userData?.name}</p>
        <h1>HomePage</h1>A perereca da vizinha ta presa na gaiola
        <s.Button onClick={() => logOut()}>LogOut</s.Button>
      </s.Main>
    </s.Container>
  );
};

export default Home;
