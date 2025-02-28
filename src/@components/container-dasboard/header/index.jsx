import { useEffect, useState } from "react";
import LogoCakfest from '../../../assets/logo-cakfest.png'
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 w-full z-50 transition-all px-[50px] py-10 ${isScrolled ? "top-2" : ""}`}>
            <div className={`duration-300 ${isScrolled ? "bg-[#C891F2] backdrop-blur-md shadow-md rounded-xl sm:rounded-3xl m-4" : "bg-transparent"}`}>
                <div className="flex w-full justify-between px-6 py-6">
                    <img src={LogoCakfest} />
                    <ul className="flex items-center gap-[40px]">
                        <li>
                            <a className="cursor-pointer font-semibold font-xl hover:underline underline-offset-8">About</a>
                        </li>
                        <li>
                            <a className="cursor-pointer font-semibold font-xl hover:underline underline-offset-8">Competition</a>
                        </li>
                        <li>
                            <a className="cursor-pointer font-semibold font-xl hover:underline underline-offset-8">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
