import React from 'react'
import MainLayout from './MainLayout';
import Sidebar from './Sidebar';

const Main2 = ({ children }) => {
    return (
        <>
            <div>
                <MainLayout/>
                <main id="main">{children}</main>
            </div>
        </>
    )
};


export default Main2;