import Panel from "../../components/panel/Panel";
import FieldSet from "../../components/fieldSet/FieldSet";
import Button from "../../components/button/Button";
import {
  LoginFormStyled,
  LoginSectionStyled,
  LoginTitleStyled,
} from "./LoginStyles";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Login() {
    const { form, handleChange, handleSubmit } = useContext(AuthContext)
  return (
    <LoginSectionStyled>
      <LoginTitleStyled>{"Unite a la comunidad pa...."}</LoginTitleStyled>
      <Panel>
        <LoginFormStyled>
          <FieldSet
            type="text"
            placeholder="Escribí tu username..."
            id="username"
            name="username"
            label="User"
            value={form.username}
            onChange={handleChange}
            maxLength={10}
          />

          <FieldSet
            type="password"
            placeholder="Escribí tu contraseña..."
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            label="Password"
            error="Este campo es requerido"
          />

          <Button
            primary
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e)
            }}
          >
            Enviar!
          </Button>
        </LoginFormStyled>
      </Panel>
    </LoginSectionStyled>
  );
}

export default Login;
