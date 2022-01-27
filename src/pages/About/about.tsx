import React from 'react';

import './styles.scss';

export const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <img src={require("../../assets/images/profile_pic.jpg").default} alt="profile pic" />
                <h1>About</h1>
            </div>
            <div className="about-content">
                <p>
                    My name is Edgar Cetino, and I am a software engineer.
                </p>
                <p>
                    I studied Neuroscience at the University of Washington and my plan was to become a doctor. I wanted a career centered around improving the quality of life for everyone. As the child of immigrant parents, I saw how strenuous the workplace could be on the human body. My parents worked physically demanding jobs and suffered because of it.
                </p>
                <p>
                    After graduation, I was preparing for my entrance exam into medical school. It was during this time that I decided to pursue a new career path in technology. By teaching myself how to code, I began to realize that my passion didn’t lie in the medical field. Because of this, I decided to put med school on hold and further explore technology.
                </p>
                <p>The excitement and satisfaction I experienced with coding quickly showed me that this was more than a hobby and that I wanted to make a career out of it. I am now a proud graduate of Hack Reactor, where I learned how to become autonomous full stack developer. Even though my interests had shifted from medicine, I know that this is a field that will allow me to make the lives of other’s so much more enjoyable.
                </p>
                <p>
                    I’ve been building apps with JavaScript, React, and SQL and I’d love if you could view my projects to see how I’ve been using them. I’m especially proud of my app called Eye Browser, which improves accessibility with eye tracking technology to map mouse cursor placement.
                </p>
            </div>
        </div>
    );
};
