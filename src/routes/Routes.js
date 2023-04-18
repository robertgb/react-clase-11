import { Route, Routes as ReacDomRoutes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Productos from "../pages/productos/Product";
import Section from "../pages/section/Section";
import Contacto from "../pages/contacto/Contacto";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Login from "../pages/login/Login";
import { ProtectedRoute } from "../components/protectedRoute/ProtectedRoute";
import User from "../pages/user/User";
import Error404 from "../pages/error404/Error404";

function Routes() {
  const { isAuth } = useContext(AuthContext)
  return (
    <Layout>
      
      <ReacDomRoutes>
        <Route path="/" element={<Home />} />

        <Route path="product">
          <Route index element={<Productos />}/>
          <Route path=":product" element={<Section />}/>
        </Route>

        <Route path="contacto" element={<Contacto />} />

        {
          !isAuth && <Route path="/login" element={<Login />}/>
        }

        <Route 
          path="usuario/:username"
          element={
            <ProtectedRoute redirectTo={"/login"}>
              <User />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Error404 />} />
      </ReacDomRoutes>
    </Layout>
  );
}

export default Routes;
