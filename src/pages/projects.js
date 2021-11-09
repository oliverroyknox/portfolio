import * as React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import Hero from "../components/Hero/Hero";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import blog from "../images/blog.png";

const ProjectsPage = () => {
    return (
        <Layout>
            <Seo title="Projects" />
            <Hero
                title={
                    <span>
                        Here is some of the <span className="text-dark-raspberry">projects</span> I’ve worked on.
                    </span>
                }
                subtitle={
                    <span>I’m always thinking about new ideas, and hopefully some of them are useful. All the source code for these projects can be found on my GitHub page.</span>
                }
            />
            <div className="w-full px-10 pb-8 flex justify-center items-center tracking-normal">
                <div className="md:px-10 w-full grid md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-8">
                    <ProjectCard title="Blog" href="https://blog.oliverroyknox.com" src={blog} alt="My personal blog" />
                </div>
            </div>
        </Layout>
    );
};

export default ProjectsPage;
