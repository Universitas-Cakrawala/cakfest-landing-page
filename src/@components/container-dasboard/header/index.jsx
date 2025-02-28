import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "p-4" : ""}`}>
            <div className={` ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-md rounded-xl px-4 m-4" : "bg-transparent"}`}>
                <div className="flex max-w-[1200px] w-full mx-auto justify-between px-8 py-6">
                    <img src="../../../vite.svg" />
                    <ul className="flex gap-4 underline underline-offset-6">
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Competition</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
