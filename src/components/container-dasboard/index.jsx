import { Outlet, ScrollRestoration } from "react-router";
import Footer from "./footer";
import Header from "./header";

const ContainerDashboard = () => {
  return (
    <div className="text-white">
      {/* Header */}
      <Header />
      {/* Body / Page */}
      <main className="flex flex-col bg-[#571265] w-full h-full">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
      <ScrollRestoration />
    </div>
  );
};
export default ContainerDashboard;
