import LogoCakfest from "../assets/logo-cakfest.png";

export const Noted = () => {
  // Fungsi untuk looping teks
  const LoopTeks = () => {
    return Array.from({ length: 10 }).map((_, i) => (
      <span key={i} className="text-base lg:text-lg mx-1.5 font-jakarta-sans">
        Tunjukkan bakat dan kreativitas kamu di berbagai kompetisi seru. Mari
        bergabung dan nantikan kejutannya! 😎
      </span>
    ));
  };

  return (
    <div className="flex items-center gap-4 lg:gap-8 py-5 px-5 md:px-11 lg:px-24 z-10 bg-[#721783] overflow-hidden">
      <img
        src={LogoCakfest}
        className="w-full lg:max-w-[172px] max-w-[105px]"
      />
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_15s_linear_infinite]">
          <LoopTeks />
        </div>
      </div>
    </div>
  );
};
