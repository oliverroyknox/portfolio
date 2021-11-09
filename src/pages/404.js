import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo/Seo";

// markup
const NotFoundPage = () => {
    return (
        <main className="w-full h-screen flex flex-col justify-center items-center text-lg tracking-normal px-10">
            <Seo title="Not found" />
            <h1 className="text-2xl font-medium mb-16 text-dark-raspberry">Page not found</h1>
            <p>
                Sorry{" "}
                <span role="img" aria-label="Pensive emoji">
                    😔
                </span>{" "}
                we couldn’t find what you were looking for.
                <br />
                {process.env.NODE_ENV === "development" ? (
                    <>
                        <br />
                        Try creating a page in <code>src/pages/</code>.
                        <br />
                    </>
                ) : null}
                <br />
                <Link to="/" className="text-xl text-blue font-medium">
                    Go home →
                </Link>
                .
            </p>
        </main>
    );
};

export default NotFoundPage;
