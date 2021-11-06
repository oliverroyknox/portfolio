import React, { useState } from "react";
import { Link } from "gatsby";

const NavLabel = ({ text, to }) => {
    return (
        <Link to={to} className="ml-12 transition-colors hover:text-dark-raspberry">
            <span>{text}</span>
        </Link>
    );
};

const NavTitle = ({ text, to, isVisible }) => {
    return (
        <Link to={to} className={`mb-16 text-4xl transition-color transition-transform hover:text-dark-raspberry ${isVisible ? "" : "transform translate-x-8"}`}>
            <span>{text}</span>
        </Link>
    );
};

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    return [
        <div className="md:hidden flex justify-start items-center ml-auto" onClick={() => setOpen(!open)}>
            <div className="h-5 w-5 flex flex-col justify-around items-center">
                <span className={`h-0.5 w-full rounded bg-black transition-transform ${open ? "transform rotate-45 translate-y-[6.25px]" : ""}`}></span>
                <span className={`${open ? "h-0 w-0" : "h-0.5 w-full"} rounded bg-black transition-all`}></span>
                <span className={`h-0.5 w-full rounded bg-black transition-transform ${open ? "transform -rotate-45 translate-y-[-6.25px]" : ""}`}></span>
            </div>
        </div>,
        <div
            className={`md:hidden absolute top-16 left-0 right-0 bottom-0 flex flex-col justify-center items-start px-10 bg-white transition-opacity ${
                open ? "" : "opacity-0 invisible"
            }`}
        >
            <NavTitle text="About me" to="/about-me" isVisible={open} />
            <NavTitle text="My skills" to="/my-skills" isVisible={open} />
            <NavTitle text="Projects" to="/projects" isVisible={open} />
            <NavTitle text="Experience" to="/experience" isVisible={open} />
            <NavTitle text="Get in touch" to="/get-in-touch" isVisible={open} />
        </div>,
    ];
};

const Header = () => {
    return (
        <header className="h-16 w-full flex items-center px-5 text-lg tracking-normal">
            <Link to="/" className="transition-colors hover:text-dark-raspberry">
                <span>Oliver Knox</span>
            </Link>
            <div className="hidden md:flex md:justify-start md:items-center md:ml-auto">
                <NavLabel text="About me" to="/about-me" />
                <NavLabel text="My skills" to="/my-skills" />
                <NavLabel text="Projects" to="/projects" />
                <NavLabel text="Experience" to="/experience" />
                <NavLabel text="Get in touch" to="/get-in-touch" />
            </div>
            <HamburgerMenu />
        </header>
    );
};

export default Header;
