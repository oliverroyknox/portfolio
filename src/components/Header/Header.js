import * as React from "react";
import { Link } from "gatsby";

const NavLabel = ({ text, to }) => {
    return (
        <Link to={to} className="ml-12 transition-colors hover:text-dark-raspberry">
            <span>{text}</span>
        </Link>
    );
};

const Header = () => {
    return (
        <header className="h-16 w-full flex items-center px-5 text-base tracking-normal">
            <Link to="/" className="transition-colors hover:text-dark-raspberry">
                <span>Oliver Knox</span>
            </Link>
            <div className="flex justify-start items-center ml-auto">
                <NavLabel text="About me" to="/about-me" />
                <NavLabel text="My skills" to="/my-skills" />
                <NavLabel text="Projects" to="/projects" />
                <NavLabel text="Experience" to="/experience" />
                <NavLabel text="Get in touch" to="/get-in-touch" />
            </div>
        </header>
    );
};

export default Header;
