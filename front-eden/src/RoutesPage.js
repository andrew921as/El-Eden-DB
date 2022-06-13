import { useRoutes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

export default function Routes() {
  return useRoutes([
    { path:'/', element:<Home/> },
    {path:'*', element:<NotFound/>}
  ])
}
