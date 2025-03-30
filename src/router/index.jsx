import { useRoutes } from "react-router";
import About from "../page/about/about";
import Competition from "../page/competition/hero";
import Hero_Detail_Competitions from "../page/detail-competition/hero";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Competition />, id: "/" },
    { path: "/about", element: <About />, id: "about" },
    {
      path: "/details-competitions",
      element: <Hero_Detail_Competitions />,
      id: "detail",
    },
  ]);

  return routes;
}

export default AppRoutes;
