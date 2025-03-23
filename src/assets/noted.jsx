import LogoCakfest from "../assets/logo-cakfest.png";

export const Noted = () => {
    // Fungsi untuk looping teks
    const LoopTeks = () => {
        return Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-lg mx-1.5">
                Tunjukkan bakat dan kreativitas kamu di berbagai kompetisi seru. Mari bergabung dan nantikan kejutannya! 😎
            </span>
        ));
    };

    return (
        <div className="flex items-center gap-8 py-5 px-24 z-10 bg-[#571265] overflow-hidden">
            <img src={LogoCakfest} />
            <div className="relative w-full overflow-hidden whitespace-nowrap">
                <div className="flex animate-[marquee_15s_linear_infinite]">
                    <LoopTeks />
                </div>
            </div>
        </div>
    );
};
