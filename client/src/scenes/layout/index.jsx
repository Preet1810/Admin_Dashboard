import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
const Layout=() => {
    const isNonMobile=useMediaQuery("(min-width: 600px)");   // true/false
    const [isSidebarOpen, setIsSidebarOpen]=useState(true);
    return (
        <Box display={isNonMobile? "flex":"block"} width="100%" height="100%">
            <Sidebar
                // user={data||{}}
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box flexGrow={1}>
                <Navbar
                    // user={data||{}}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;