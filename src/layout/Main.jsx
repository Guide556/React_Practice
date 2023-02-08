import React from "react";
import Header from "./Header"
import Footer from "../private/Footer"
import Home from "../pages/Home"
import Service from "../pages/Service"
import Service2 from "../pages/Service2"
import Service3 from "../pages/Service3"
import Service4 from "../pages/Service4";
import Service5 from "../pages/Service5";
import Service6 from "../pages/Service6";
import Service7 from "../pages/Service7";
import Sidebar from "../private/Sidebar";
import TopBar from "../private/TopBar";
import MainLayout from "../private/MainLayout";


// const Main = () => {
//     return (
//         <>
//             <Header />
//             <div>
//                 <Home />
//                 <Service/>
//                 <Service2/>
//                 <Service3/>
//                 <Service4/>
//                 <Service5/>
//                 <Service6/>
//                 <Service7/>
//             </div>
//             <Footer />
//         </>
//     )
// };

const Main = ({ children }) => {
    return (
        <>
            <Header />
            <main id="main">{children}</main>
            <Footer />
        </>
    )
};

export default Main;