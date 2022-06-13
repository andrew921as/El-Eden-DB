import { useRoutes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";

export default function Routes() {
  return useRoutes([
    { path:'/', element:<Home/> },
    {path:'*', element:<NotFound/>}
  ])
}
