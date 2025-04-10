import { RouterProvider, createBrowserRouter } from "react-router";
import About from "../page/about/about";
import Competition from "../page/competition/hero";
import Hero_Detail_Competitions from "../page/detail-competition/hero";
import ContainerDashboard from "../components/container-dasboard";

function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <ContainerDashboard />,
      children: [
        { index: true, element: <Competition /> },
        { path: "/about", element: <About /> },
        {
          path: "/details-competitions",
          element: <Hero_Detail_Competitions />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default AppRoutes;
