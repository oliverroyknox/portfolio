import React, { useEffect, useRef } from "react";
import javascript from "../../images/javascript.svg";
import css from "../../images/css.svg";
import html from "../../images/html.svg";
import stencil from "../../images/stencil.svg";
import react from "../../images/react.svg";

const ProficiencyChart = () => {
    const container = useRef(null);

    useEffect(() => {
        container.current.querySelector("#javascript-progress").classList.add("w-3/4");
        container.current.querySelector("#css-progress").classList.add("w-3/5");
        container.current.querySelector("#html-progress").classList.add("w-5/6");
        container.current.querySelector("#stencil-progress").classList.add("w-1/2");
        container.current.querySelector("#react-progress").classList.add("w-2/5");
    }, [container]);

    return (
        <div ref={container} className="flex flex-col justify-center items-center gap-10 md:px-10 px-5 py-10 rounded-xl mb-4 bg-black border-l-[1rem] border-pink-raspberry">
            <div className="flex justify-start items-center w-full gap-5">
                <img width={32} src={javascript} alt="Javascript logo" />
                <div className="w-full h-4 bg-light-gray rounded-full">
                    <span id="javascript-progress" className="block w-0 h-4 bg-javascript-yellow rounded-full transition-all duration-300" />
                </div>
            </div>
            <div className="flex justify-start items-center w-full gap-5">
                <img className="mr-1" width={32} src={css} alt="CSS logo" />
                <div className="w-full h-4 bg-light-gray rounded-full">
                    <span id="css-progress" className="block w-0 h-4 bg-css-blue rounded-full transition-all duration-300 delay-[50ms]" />
                </div>
            </div>
            <div className="flex justify-start items-center w-full gap-5">
                <img width={32} src={html} alt="HTML logo" />
                <div className="w-full h-4 bg-light-gray rounded-full">
                    <span id="html-progress" className="block w-0 h-4 bg-html-red rounded-full transition-all duration-300 delay-100" />
                </div>
            </div>
            <div className="flex justify-start items-center w-full gap-5">
                <img width={32} src={stencil} alt="Stencil logo" />
                <div className="w-full h-4 bg-light-gray rounded-full">
                    <span id="stencil-progress" className="block w-0 h-4 bg-stencil-white rounded-full transition-all duration-300 delay-150" />
                </div>
            </div>
            <div className="flex justify-start items-center w-full gap-5">
                <img width={32} src={react} alt="React logo" />
                <div className="w-full h-4 bg-light-gray rounded-full">
                    <span id="react-progress" className="block w-0 h-4 bg-react-cyan rounded-full transition-all duration-300 delay-200" />
                </div>
            </div>
        </div>
    );
};

export default ProficiencyChart;
