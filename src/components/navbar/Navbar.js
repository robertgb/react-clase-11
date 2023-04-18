import {
  LogoStyled,
  NavbarContainerStyled,
  NavbarStyled,
} from "./NavbarStyles";
import Separador from "../separador/Separador";
import { LinkItem } from "../linkItem/LinkItem";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  return (
    <NavbarContainerStyled>
      <LogoStyled onClick={(e) =>{
         e.preventDefault()
        navigate('/')
      }}>
        <img
          alt="Logo de helado"
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1653953150/coding/logoPixel_qihcme.png"
        />
      </LogoStyled>
      <NavbarStyled>
        <Separador />

        <LinkItem to="/product">Productos</LinkItem>
        <LinkItem to="/contacto">Contacto</LinkItem>
        <LinkItem to="/login">Login</LinkItem>

        <Separador />
      </NavbarStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
