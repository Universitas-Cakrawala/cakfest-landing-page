import { useEffect, useState } from "react";
import LogoCakfest from "../../../assets/logo-cakfest.png";
import { Link, useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all px-5 py-5 duration-300 ${
        isScrolled ? "bg-[#571265] shadow-md px-0 py-0" : "bg-transparent"
      }`}
    >
      <div className="">
        <div className="flex w-full justify-between">
          <Link to="/">
            <img src={LogoCakfest} />
          </Link>
          <ul className="flex items-center gap-[40px]">
            <li>
              <Link
                className={`cursor-pointer font-semibold font-xl hover:underline underline-offset-8 ${
                  pathname === "/" ? "underline underline-offset-8" : ""
                }`}
                to="/"
              >
                Competition
              </Link>
            </li>
            <li>
              <Link
                className={`cursor-pointer font-semibold font-xl hover:underline underline-offset-8 ${
                  pathname === "/about" ? "underline underline-offset-8" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <a
                className="cursor-pointer font-semibold font-xl"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=6289526956197"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative inline-block px-4 py-2 text-yellow-900 font-normal text-base">
                  Contact Us
                  <svg
                    width="125"
                    height="44"
                    viewBox="0 0 125 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-full h-full -z-10"
                  >
                    <g fill={isHovered ? "#FDC833" : "#FFD700"}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0.691299H117V4.6913H121V8.6913H125V35.6913H121V39.6913H117V43.6913H8V39.6913H4V35.6913H0V8.6913H4V4.6913H8V0.691299Z"
                      />
                      <rect
                        x="8"
                        y="39.6913"
                        width="109"
                        height="4"
                        fill="#B48E24"
                      />
                      <rect
                        x="8"
                        y="39.6913"
                        width="109"
                        height="4"
                        fill="#B48E24"
                      />
                      <rect
                        x="8"
                        y="39.6913"
                        width="109"
                        height="4"
                        fill="#B48E24"
                      />
                    </g>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
