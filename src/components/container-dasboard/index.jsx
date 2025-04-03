import AppRoutes from "../../router";
import Footer from "./footer";
import Header from "./header";

const ContainerDashboard = () => {
  return (
    <div className="flex flex-col bg-[#571265] w-full h-full text-white relative">
      {/* Header */}
      <Header />
      {/* Body / Page */}
      <AppRoutes />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default ContainerDashboard;
