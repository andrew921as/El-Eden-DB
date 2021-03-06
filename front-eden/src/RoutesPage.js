import { useRoutes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import RegistarUser from "./Pages/RegistarUser";
import RegistrarAnimal from "./Pages/RegistrarAnimal";
import BuscarAnimal from "./Pages/BuscarAnimal";
import RegistrarVolun from "./Pages/RegistrarVolun";

export default function Routes() {
  return useRoutes([
    { path:'/', element:<Home/> },
    { path:'/Registro-Usuario', element:<RegistarUser/> },
    { path:'/Registro-Animal', element:<RegistrarAnimal/> },
    { path:'/Buscar-Animal', element:<BuscarAnimal/> },
    { path:'/Registro-Voluntario', element:<RegistrarVolun/> },
    {path:'*', element:<NotFound/>}
  ])
}
