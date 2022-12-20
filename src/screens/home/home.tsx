import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

import * as s from "./styled-home";

const Home = () => {
  const { logOut, userData } = useContext(AuthContext);

  return (
    <s.Container>
      <s.Main>
        <p>Bem vindo {userData?.name}</p>
        <h1>HomePage</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        quos odio similique tempora nulla non animi itaque ex! Sapiente fuga
        quis recusandae quisquam commodi assumenda sint omnis? Delectus,
        provident natus.
        <s.Button onClick={() => logOut()}>LogOut</s.Button>
      </s.Main>
    </s.Container>
  );
};

export default Home;
