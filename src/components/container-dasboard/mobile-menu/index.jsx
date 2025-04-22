import { useMobileMenu } from "../../../contexts/mobile-navigation-context";
import { Link, useLocation } from "react-router";
import useIsCompetitionActive from "../../../hooks/use-is-competition-active";

export default function MobileMenu() {
  const { isOpen, closeSidebar } = useMobileMenu();
  const { pathname } = useLocation();
  const isCompetitionActive = useIsCompetitionActive(false);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeSidebar} />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 max-w-64 w-full h-full bg-[#571265] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="flex justify-end">
            <button onClick={closeSidebar} className="text-white" aria-label="Close Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="mt-8 space-y-6">
            <li>
              <Link
                className={`block text-white text-lg font-semibold hover:text-yellow-300 ${
                  pathname === "/" && !isCompetitionActive ? "text-yellow-300" : ""
                }`}
                to="/"
                onClick={closeSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`block text-white text-lg font-semibold hover:text-yellow-300 ${
                  isCompetitionActive ? "text-yellow-300" : ""
                }`}
                to="/"
                onClick={(e) => {
                  closeSidebar();
                  if (pathname === "/") {
                    e.preventDefault();
                    document
                      .getElementById("competition-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Competition
              </Link>
            </li>
            <li>
              <Link
                className={`block text-white text-lg font-semibold hover:text-yellow-300 ${
                  pathname === "/about" ? "text-yellow-300" : ""
                }`}
                to="/about"
                onClick={closeSidebar}
              >
                About
              </Link>
            </li>
            <li>
              <a
                className="block text-white text-lg font-semibold hover:text-yellow-300"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=6289526956197"
                onClick={closeSidebar}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
