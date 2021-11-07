import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import code from "../images/code.svg";
import paw from "../images/paw.svg";
import headphones from "../images/headphones.svg";
import monitor from "../images/monitor.svg";
import journalWhills from "../images/journal-whills.svg";

const Icon = ({ src, alt }) => {
    return <img className="h-12 w-12 mr-4" src={src} alt={alt} />;
};

const IndexPage = () => {
    return [
        <Layout>
            <Hero
                title={
                    <span>
                        Hi I'm Oli. A developer, <span className="text-dark-raspberry">passionate</span> about <span className="text-dark-raspberry">web technology</span>.
                    </span>
                }
                subtitle={<span>The web is essential to the modern world. I love to create rich user experience to make it's power accessible to everyone.</span>}
            />
            <div className="w-full px-10 pb-8 flex justify-center items-center tracking-normal">
                <div className="max-w-2xl">
                    <h2 className="text-2xl font-medium mb-4 tracking-tight">Who am I?</h2>
                    <ul className="text-xl my-8">
                        <li className="flex justify-start items-center mb-4">
                            <Icon src={code} alt={"Code icon"} />
                            <span>Software Engineer</span>
                        </li>
                        <li className="flex justify-start items-center mb-4">
                            <Icon src={paw} alt={"Paw icon"} />
                            <span>Dog Owner</span>
                        </li>
                        <li className="flex justify-start items-center mb-4">
                            <Icon src={headphones} alt={"Headphones icon"} />
                            <span>Music Fanatic</span>
                        </li>
                        <li className="flex justify-start items-center mb-4">
                            <Icon src={monitor} alt={"Computer screen icon"} />
                            <span>Tech Enthusiast</span>
                        </li>
                        <li className="flex justify-start items-center mb-4">
                            <Icon src={journalWhills} alt={"Star Wars book icon"} />
                            <span>Book Worm</span>
                        </li>
                    </ul>
                    <p className="mb-4">Have a browser around the site to see what you like. If anything I may be able to persuade you with some pictures of my dogs!</p>
                    <Link to="/about-me" className="text-xl text-blue font-medium">
                        <span>About me →</span>
                    </Link>
                </div>
            </div>
        </Layout>,
    ];
};

export default IndexPage;
