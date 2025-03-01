import { useEffect, useState } from "react";
import LogoCakfest from '../../../assets/logo-cakfest.png'
import { useNavigate } from "react-router";
import { onClickNav } from "../../../helper/onclick-navbar";
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate()
    const [activeUnderline, setActiveUnderline] = useState('/')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 w-full z-50 transition-all px-28 py-14 duration-300 ${isScrolled ? "bg-white/10 backdrop-blur-md shadow-md px-0 py-0" : "bg-transparent"}`}>
            <div className="">
                <div className="flex w-full justify-between">
                    <img src={LogoCakfest} />
                    <ul className="flex items-center gap-[40px]">
                        <li>
                            <a className={`cursor-pointer font-semibold font-xl hover:underline underline-offset-8 ${activeUnderline === '/' ? "underline underline-offset-8" : ""}`}
                                onClick={() => { onClickNav({ path: '/', navigate }); setActiveUnderline('/') }}>Competition</a>
                        </li>
                        <li>
                            <a className={`cursor-pointer font-semibold font-xl hover:underline underline-offset-8 ${activeUnderline === '/about' ? "underline underline-offset-8" : ""}`}
                                onClick={() => { onClickNav({ path: '/about', navigate }); setActiveUnderline('/about') }}>About</a>
                        </li>
                        {console.log(activeUnderline, 'memek')}
                        <li>
                            <a className={`cursor-pointer font-semibold font-xl hover:underline underline-offset-8 ${activeUnderline === '/details-competitions' ? " underline underline-offset-8" : ""}`}
                                onClick={() => { onClickNav({ path: '/details-competitions', navigate }); setActiveUnderline('/details-competitions') }}>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
