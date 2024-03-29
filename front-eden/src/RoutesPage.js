import { useRoutes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import RegistarUser from "./Pages/RegistarUser";
import RegistrarAnimal from "./Pages/RegistrarAnimal";
import BuscarAnimal from "./Pages/BuscarAnimal";
import RegistrarVolun from "./Pages/RegistrarVolun";
import Login from './Pages/Login';
import RegistrarPago from "./Pages/RegistrarPago";
import BuscarCliente from "./Pages/BuscarCliente"
import BuscarVoluntario from "./Pages/BuscarVoluntario";
import BuscarPago from "./Pages/BuscarPago";
import LadingPage from "./Pages/LadingPage";

export default function Routes() {
  return useRoutes([
    { path:'/', element:<LadingPage/>  },
    { path:'/Home', element:<Home/> },
    { path:'/Registro-Usuario', element:<RegistarUser/> },
    { path:'/Registro-Animal', element:<RegistrarAnimal/> },
    { path:'/Buscar-Animal', element:<BuscarAnimal/> },
    { path:'/Registro-Voluntario', element:<RegistrarVolun/> },
    { path:'/Registro-Pago', element:<RegistrarPago/> },
    { path:'/Buscar-Cliente', element:<BuscarCliente/> },
    { path:'/Buscar-Voluntario', element:<BuscarVoluntario/> },
    { path:'/Buscar-Pago', element:<BuscarPago/> },
    { path:'/Login', element:<Login /> },
    {path:'*', element:<NotFound/>}
  ])
}
