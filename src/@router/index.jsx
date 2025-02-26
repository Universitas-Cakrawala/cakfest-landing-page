import { useRoutes } from "react-router";
import Home from "../@page/home";
import About from "../@page/about";

function AppRoutes() {
    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
    ]);

    return routes;
}

export default AppRoutes;
