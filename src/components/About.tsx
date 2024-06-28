import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>
            <h2>This application is about metrics. Go <Link to={"/dashboard"}>dashboard page</Link> to explore it.</h2>
        </div>
    );
};

export default About;