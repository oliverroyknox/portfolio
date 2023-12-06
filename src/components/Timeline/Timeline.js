import * as React from "react";
import thumbtack from "../../images/thumbtack.svg";

const Timeline = () => {
    return (
        <div className="flex flex-col justify-center items-center relative gap-3 mr-[12.5%]">
            <div className="h-[16.5rem] w-2 bg-black rounded-full"></div>
            <div className="h-6 w-2 bg-black rounded-full"></div>
            <div className="h-6 w-2 bg-black rounded-full"></div>
            <div className="h-24 w-2 bg-black rounded-full"></div>
            <div className="absolute flex justify-center items-center w-full gap-5 top-4">
                <span className="w-full text-right font-medium text-xs">July 2018</span>
                <img src={thumbtack} height={40} width={40} alt="Thumbtack icon" />
                <span className="w-full overflow-hidden overflow-ellipsis">Began apprenticeship</span>
            </div>
            <div className="absolute flex justify-center items-center w-full gap-5 top-20">
                <span className="w-full text-right font-medium text-xs">Sept 2018</span>
                <img src={thumbtack} height={40} width={40} alt="Thumbtack icon" />
                <span className="w-full overflow-hidden overflow-ellipsis">Started university</span>
            </div>
            <div className="absolute flex justify-center items-center w-full gap-5 top-36">
                <span className="w-full text-right font-medium text-xs">June 2022</span>
                <img src={thumbtack} height={40} width={40} alt="Thumbtack icon" />
                <span className="w-full overflow-hidden overflow-ellipsis">Finished university</span>
            </div>
            <div className="absolute flex justify-center items-center w-full gap-5 top-52">
                <span className="w-full text-right font-medium text-xs">Sept 2022</span>
                <img src={thumbtack} height={40} width={40} alt="Thumbtack icon" />
                <span className="w-full overflow-hidden overflow-ellipsis">Started at Mission Labs</span>
            </div>
            <div className="absolute flex justify-center items-center w-full gap-5 top-[23.5rem]">
                <span className="w-full text-right font-medium text-xs">TBC</span>
                <img src={thumbtack} height={40} width={40} alt="Thumbtack icon" />
                <span className="w-full overflow-hidden overflow-ellipsis">Whatever the future holds</span>
            </div>
        </div>
    );
};

export default Timeline;
