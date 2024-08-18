'use client';
import React from 'react';
import {Toaster} from "react-hot-toast";

const Providers =  ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
           <Toaster/>
            {children}
        </>
    );
};

export default Providers;