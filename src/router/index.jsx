import { useRoutes } from "react-router";
import About from "../page/about";
import Competition from "../page/home";
import DetailsCompetitions from "../page/details-competitions";

function AppRoutes() {
    const routes = useRoutes([
        { path: "/", element: <Competition />, id: '/' },
        { path: "/about", element: <About />, id: 'about' },
        { path: '/details-competitions', element: <DetailsCompetitions />, id: 'detail' }
    ]);

    return routes;
}

export default AppRoutes;
