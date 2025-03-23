import { useRoutes } from "react-router";
import About from "../page/about/about";
import Competition from "../page/competition/hero";
import DetailsCompetitions from "../page/detail-competition/details-competitions";

function AppRoutes() {
    const routes = useRoutes([
        { path: "/", element: <Competition />, id: '/' },
        { path: "/about", element: <About />, id: 'about' },
        { path: '/details-competitions', element: <DetailsCompetitions />, id: 'detail' }
    ]);

    return routes;
}

export default AppRoutes;
