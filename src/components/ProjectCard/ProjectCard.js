import * as React from "react";
import { Link } from "gatsby";

const ProjectCard = ({ title, src, alt, href }) => {
    return (
        <Link to={href}>
            <div className="w-full h-96 rounded-xl overflow-hidden relative group transition-all duration-300 pointer:hover:scale-105">
                <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover filter pointer:blur-sm transition-all duration-300 pointer:group-hover:blur-none opacity-80 pointer:opacity-100"
                />
                <div className="rounded-xl font-medium text-white bg-black w-2/3 border-l-[0.75rem] border-pink-raspberry absolute bottom-5 left-5 py-2 px-4 text-2xl transition-all duration-300 pointer:group-hover:translate-y-24 pointer:group-hover:-translate-x-12 pointer:group-hover:scale-50">
                    {title}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
