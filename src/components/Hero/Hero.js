import * as React from "react";

const Hero = ({ title, subtitle }) => {
    return (
        <div className="w-full h-[50vh] my-4 px-10 flex flex-col justify-center items-center tracking-normal">
            <div className="max-w-2xl">
                <h1 className="text-3xl tracking-tight mb-4 font-medium">{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default Hero;
