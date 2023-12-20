import React from "react";
import image1 from '../img/1221.jpg';
import image2 from '../img/1234.jpg';
function About (){
    return (
        <div>
            <h2>About Page</h2>
            <img src={image1} />
            <img src={image2} />
        </div>
    )
}

export default About;