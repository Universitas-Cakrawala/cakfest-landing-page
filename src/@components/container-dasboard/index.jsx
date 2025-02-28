import AppRoutes from "../../@router";
import Header from "./header";

const ContainerDashboard = () => {
    return (
        <div className="flex flex-col bg-[#571265] w-full h-full text-white">
            {/* Header */}
            <Header />
            {/* Body / Page */}
            <AppRoutes />
            {/* Footer */}
            <div></div>
        </div>
    )
}
export default ContainerDashboard;

