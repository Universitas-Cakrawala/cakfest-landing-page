import { BrowserRouter } from "react-router";
import ContainerDashboard from "./components/container-dasboard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <ContainerDashboard />
    </BrowserRouter>
  );
}

export default App;
