import * as React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
    return [<Header key="header" />, <main key="main">{children}</main>];
};

export default Layout;
