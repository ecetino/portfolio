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
                    After graduation, as I was studying for my entrance exam for med school I began to learn how to code and quickly became engulfed in this new passion. I enjoyed it so much that I decided to put my med school plans on hold and pursue this new career path. I joined a coding bootcamp, Hack Reactor, and took my first steps to become a full-stack developer. Even though this career path was far different than my original, I knew that I could still improve lives as a developer and set that as my goal for myself.
                </p>
                <p>
                    I took my first big step towards my goal when I joined Seity Health as a developer. Seity Health is a startup centered around improving the lives of its user by assessing their core values and coaching them towards fulfilling them. As a dev, I've played a key role in creating the application the team dreamed of and continue to grow tremendously as we add new features to our application and our user base grows.
                </p>
                <p>
                    I am always open to hearing about new opportunities to pursue additional interests of mine or to exchange stories and I’d be happy if you’d reach out to me via LinkedIn or email at 1cetino.e@gmail.com.
                </p>
            </div>
        </div>
    );
};
