import * as React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import ProficiencyChart from "../components/ProficiencyChart/ProficiencyChart";

const SkillsPage = () => {
    return (
        <Layout>
            <Hero
                title={
                    <span>
                        I specialise in <span className="text-dark-raspberry">UI</span> programming but also work with the <span className="text-dark-raspberry">backend</span>.
                    </span>
                }
                subtitle={
                    <span>
                        I mainly use frameworks and tools such as React, Stencil, and Ionic during my front-end development. But I have also worked on server side application using
                        Node, Go and Java.
                    </span>
                }
            />
            <div className="w-full px-10 pb-8 flex justify-center items-center tracking-normal">
                <div className="max-w-2xl w-full">
                    <h2 className="text-2xl font-medium mb-4 tracking-tight">My proficiencies</h2>
                    <ProficiencyChart />
                    <p className="mb-4">
                        I’m a big fan of web components and in combinations with an SPA, I’ve found Stencil JS to be a great toolchain to learn. This is also what I’ve used mainly
                        during my development career to provide powerful web applications on Desktop and Mobile.
                    </p>
                    <p className="mb-4">
                        I’m also familiar with other frameworks such as React, Gatsby, Tailwind, etc... That’s how I’ve built this site and recognise that an SSG is a more suitable
                        technique for a static site such as this.
                    </p>
                    <h2 className="text-2xl font-medium mb-4 tracking-tight mt-20">Learning more</h2>
                    <p className="mb-4">
                        I’m always looking for opportunities to learn more and expand my development knowledge. Whether that be taking courses or trying out new frameworks that
                        I’ve been recommended.
                    </p>
                    <p className="mb-4">
                        I’m a practical learner and prefer to get the gist of something, then use the documentation available to try it out in my own code. I find, for me
                        personally, that this makes it stick in my head and helps recognise the problems that the tool can solve when it appears again in later projects.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default SkillsPage;
