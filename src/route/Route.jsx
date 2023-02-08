import Home from "../pages/Home";
import Service from "../pages/Service";
import Service2 from "../pages/Service2";
import Service3 from "../pages/Service3";
import Service4 from "../pages/Service4";
import Service5 from "../pages/Service5";
import Service6 from "../pages/Service6";
import Service7 from "../pages/Service7";
import Contract1 from "../pages/Contract1";

export const PublicRoute = [
    {
        id:"1",
        path:"/",
        element:<Home />
    },
    {
        id:"2",
        path:"/service",
        element:<Service />
    },
    {
        id:"3",
        path:"/service2",
        element:<Service2 />
    },
    {
        id:"4",
        path:"/service3",
        element:<Service3 />
    },
    {
        id:"5",
        path:"/service4",
        element:<Service4 />
    },
    {
        id:"6",
        path:"/service5",
        element:<Service5 />
    },
    {
        id:"7",
        path:"/service6",
        element:<Service6 />
    },
    {
        id:"8",
        path:"/service7",
        element:<Service7 />
    },
    {
        id:"9",
        path:"/contact1",
        element:<Contract1 />
    },
];