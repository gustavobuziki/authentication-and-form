import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

import * as s from "./styled-home";

const Home = () => {
  const { logOut, userData } = useContext(AuthContext);

  const array = [
    'batata',
    'cenoura',
    'maça',
    'banana',
    'acerola',
    'pitaya',
    'uva',
  ]

  //a função acima é capaz de deixar um array em ordem alfabética

  console.log(array.sort(Intl.Collator().compare))

  return (
    <s.Container>
      <s.Main>
        <p>Bem vindo {userData?.name}</p>
        <h1>HomePage</h1>
        <s.Button onClick={() => logOut()}>LogOut</s.Button>
      </s.Main>
    </s.Container>
  );
};

export default Home;
