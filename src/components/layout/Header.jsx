import React from 'react';
import MainMenu from "../common/Navbar";
import TopBar from "./Topbar"

const Header = () => {
    return (
        <div>
            <TopBar/>
       <div>
       </div>
        <div>
            <MainMenu/>
        </div>
        </div>
    );
};

export default Header;