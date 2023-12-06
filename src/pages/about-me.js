import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Hero from "../components/Hero/Hero";
import teddy from "../images/teddy.gif";
import teddyAndIzzy from "../images/teddy & izzy.jpeg";
import izzy from "../images/izzy.jpeg";
import vinyl from "../images/vinyl.jpeg";
import books from "../images/books.jpeg";

const AboutPage = () => {
    return (
        <Layout>
            <Seo title="About me" />
            <Hero
                title={
                    <span>
                        I'm a <span className="text-dark-raspberry">software engineer</span> focusing on the <span className="text-dark-raspberry">web</span>.
                    </span>
                }
                subtitle={
                    <span>
                        I currently work as a front-end developer building telecommunication applications and whatever else grabs my interest!
                    </span>
                }
            />
            <div className="w-full px-10 pb-8 flex justify-center items-center tracking-normal">
                <div className="max-w-2xl w-full">
                    <h2 className="text-2xl font-medium mb-4 tracking-tight">Meet the dogs</h2>
                    <p className="mb-4">As promised, here’s some pictures of the cutest dogs on the planet*.</p>
                    <p className="mb-4">
                        <i>*Findings may be subject to personal bias.</i>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-4 gap-5">
                        <div className="aspect-w-1 sm:aspect-w-8 aspect-h-1 sm:aspect-h-10 sm:row-start-1 sm:row-end-3">
                            <img className="w-full h-full object-cover rounded-xl" src={teddy} alt="My dog, Teddy" />
                        </div>
                        <span className="hidden sm:flex sm:justify-center sm:items-center text-2xl font-medium text-dark-raspberry">Teddy</span>
                        <div className="aspect-w-1 sm:aspect-w-8 aspect-h-1 sm:aspect-h-10 sm:row-start-2 sm:row-end-4">
                            <img className="w-full h-full object-cover rounded-xl" src={teddyAndIzzy} alt="Teddy and Izzy sleeping" />
                        </div>
                        <span className="hidden sm:flex sm:justify-center sm:items-center text-2xl font-medium">Izzy</span>
                        <div className="aspect-w-1 sm:aspect-w-8 aspect-h-1 sm:aspect-h-10 sm:row-start-3 sm:row-end-5 ">
                            <img className="w-full h-full object-cover rounded-xl" src={izzy} alt="My other dog, Izzy" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-medium mb-4 tracking-tight mt-20">Coding and design</h2>
                    <p className="mb-4">
                        I’ve been coding since high school and have always been facinated with the complexity of it. There’s always more to learn! I’ve found my niche in the design
                        and implementation of UI and how to utilise it so the user gets the most out of your application.
                    </p>
                    <p className="mb-4">
                        Web development has also grasped my intrigue, making content available to as many people as possible is very appealing. And as you dive further into it,
                        there’s an infinite amount of tech to learn about and it doesn’t stop growing. I love to try out the latest tools and frameworks, even if I don’t use them
                        everyday I’ve found it useful to have a vast knowledge of the options out there.
                    </p>
                    <Link to="/my-skills" className="text-xl text-blue font-medium">
                        <span>My skills →</span>
                    </Link>
                    <h2 className="text-2xl font-medium mb-4 tracking-tight mt-20">My hobbies</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-5 mb-4">
                        <div className="aspect-w-1 sm:aspect-w-8 aspect-h-1 sm:aspect-h-10 sm:row-start-1 sm:row-end-3">
                            <img className="w-full h-full object-cover rounded-xl" src={vinyl} alt="My vinyl player" />
                        </div>
                        <div className="aspect-w-1 sm:aspect-w-8 aspect-h-1 sm:aspect-h-10 sm:row-start-2 sm:row-end-4">
                            <img className="w-full h-full object-cover rounded-xl" src={books} alt="My book case" />
                        </div>
                    </div>
                    <p className="mb-4">
                        I’m a massive music fan, I love going to concerts and growing my collection of vinyls. If you need someone for the music round in a quiz, I’m your man!
                    </p>
                    <p className="mb-4">
                        I’m also an Formula 1 fan, and religiously watch the races every week with the family. I support McLaren and it’s looking like a pretty good season for us.
                    </p>
                    <p>
                        Besides that, I read quite frequently a lot of books related to my work and the future of technology. Also some Sci-Fi / Dystopian future kinds of stuff. As
                        well as I love to game, especially a good story driven one. They always get me hooked.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default AboutPage;
