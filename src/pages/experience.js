import * as React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Timeline from "../components/Timeline/Timeline";

const ExperiencePage = () => {
    return (
        <Layout>
            <Hero
                title={
                    <span>
                        A <span className="text-dark-raspberry">timeline</span> of my career so <span className="text-dark-raspberry">far</span>.
                    </span>
                }
                subtitle={
                    <span>I’m always thinking about new ideas, and hopefully some of them are useful. All the source code for these projects can be found on my GitHub page.</span>
                }
            />
            <div className="w-full px-10 pb-8 flex justify-center items-center tracking-normal">
                <div className="max-w-2xl w-full">
                    <Timeline />
                </div>
            </div>
        </Layout>
    );
};

export default ExperiencePage;
