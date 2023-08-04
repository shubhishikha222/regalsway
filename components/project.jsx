import React from 'react';
import project1 from '../image/project1.jpg';
import project2 from '../image/project2.jpg';
import project3 from '../image/project3.jpg';

const Project = () => {
    return (
    <>
    <div className="projecthead">
    <h4>OUR LATEST PROJECTS</h4>
    <h1>A fresh approach to financial services for entrepreneurs</h1>
    </div>
    <div className="projects">
        <img src={project1} alt="image.jpg"/>
        <img src={project2} alt="image.jpg"/>
        <img src={project3} alt="image.jpg"/>
    </div>

    </>
    );
}
export default Project;