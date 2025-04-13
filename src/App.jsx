import AppRoutes from "./router";
import { MobileMenuProvider } from "./contexts/mobile-navigation-context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <MobileMenuProvider>
      <AppRoutes />
    </MobileMenuProvider>
  );
}

export default App;
