import { useEffect, useState } from "react";
import LogoCakfest from "../../../assets/logo-cakfest.png";
import { Link, useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="flex w-full justify-between items-center">
        <Link to="/">
          <img src={LogoCakfest} className="md:w-44 w-26 h-auto" />
        </Link>
        <ul className="md:flex items-center gap-[40px] hidden">
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
          <li className="group hover:scale-105">
            <a
              className="cursor-pointer font-semibold font-xl"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=6289526956197"
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
                  <g className="fill-[#FFD700] group-hover:fill-[#FDC833]">
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
        <button aria-label="Toggle Mobile Menu" className="size-8 md:hidden">
          <svg
            className="size-full"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" width="24" height="30" fill="#FDC833" />
            <rect
              x="30"
              y="27"
              width="30"
              height="24"
              transform="rotate(180 30 27)"
              fill="#FDC833"
            />
            <rect x="1" y="1" width="28" height="28" fill="#FDC833" />
            <rect x="3" y="29" width="24" height="1" fill="#B48E24" />
            <rect x="1" y="28" width="3" height="1" fill="#B48E24" />
            <rect x="1" y="27" width="1" height="1" fill="#B48E24" />
            <rect
              x="27"
              y="1"
              width="24"
              height="1"
              transform="rotate(180 27 1)"
              fill="#FEDA76"
            />
            <rect
              x="29"
              y="2"
              width="3"
              height="1"
              transform="rotate(180 29 2)"
              fill="#FEDA76"
            />
            <rect
              x="29"
              y="3"
              width="1"
              height="1"
              transform="rotate(180 29 3)"
              fill="#FEDA76"
            />
            <rect x="5" y="7" width="20" height="3" fill="#6A5415" />
            <rect x="5" y="13" width="20" height="3" fill="#6A5415" />
            <rect x="5" y="19" width="20" height="3" fill="#6A5415" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
