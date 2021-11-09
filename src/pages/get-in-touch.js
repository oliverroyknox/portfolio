import * as React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import mail from "../images/mail.svg";
import { Link } from "gatsby";

const Icon = ({ src, alt }) => {
    return <img className="h-12 w-12 mr-4" src={src} alt={alt} />;
};

const ContactPage = () => {
    return (
        <Layout>
            <Hero
                title={
                    <span>
                        If you'd like to <span className="text-dark-raspberry">get in touch</span>, you can <span className="text-dark-raspberry">find</span> me here.
                    </span>
                }
                subtitle={<span>I’m happy to talk about my projects, career or anything else. Feel free to contact me on the links below.</span>}
            />
            <div className="w-full px-10 pb-8 flex justify-center items-center tracking-normal">
                <div className="max-w-2xl w-full flex justify-center items-center">
                    <ul className="text-xl my-8">
                        <li className="flex justify-start items-center mb-8">
                            <Link to="https://github.com/oliverroyknox" className="flex items-center group">
                                <Icon src={github} alt="Github icon" />
                                <span className="group-hover:text-blue">@oliverroyknox</span>
                            </Link>
                        </li>
                        <li className="flex justify-start items-center mb-8">
                            <Link to="https://twitter.com/oliverroyknox" className="flex items-center group">
                                <Icon src={twitter} alt="Twitter icon" />
                                <span className="group-hover:text-blue">@oliverroyknox</span>
                            </Link>
                        </li>
                        <li className="flex justify-start items-center mb-8">
                            <a href="mailto:me@oliverroyknox.com" className="flex items-center group">
                                <Icon src={mail} alt="Mail icon" />
                                <span className="group-hover:text-blue">me@oliverroyknox.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default ContactPage;
