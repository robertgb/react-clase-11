import { useContext } from "react";
import Button from "../../components/button/Button";
import Panel from "../../components/panel/Panel";
import Title from "../../components/title/Title";
import {
  ContainerButtonStyled,
  LogoutIcon,
  UserContainerStyled,
} from "./UserStyles";
import AuthContext from "../../context/AuthContext";

const User = () => {
  const {  user } = useContext(AuthContext)
  return (
    <UserContainerStyled>
      <Title>{`Bienvenido ${user}`}</Title>
      <Panel>
        {" "}
        {user} te felicito. Ya estas en una página privada gracias a React
        Router y Nucba{" "}
      </Panel>
      <ContainerButtonStyled>
        <Button primary onClick={(e) => e.preventDefault()}>
          {" "}
          Cerrar sesión <LogoutIcon />{" "}
        </Button>
      </ContainerButtonStyled>
    </UserContainerStyled>
  );
};

export default User;
