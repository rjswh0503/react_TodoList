import React from "react";
import About from './About';

function Header(){

    return(
        <header>
            <h1>My WebSite</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#Todo">할 일 목록</a></li>
                </ul>
            </nav>
            <About/>
        </header>
    )
};


export default Header;