import React from 'react';
import ProjectItem from './components/ProjectItem/projectItem';

import './styles.scss';

export const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <ProjectItem
                heading="Eye Browser"
                description="An open-source training application to practice cursor movement using eye tracking technology. Eye Browser looks to improve accessibility by letting you use the web with your eyes. Demo not optimized for mobile."
                image={require('../../assets/images/eye_browser.png').default}
                repoPath="https://github.com/ecetino/eye-browser"
                demoPath="https://eye-browser-git-master-ecetino.vercel.app"
            />
            <ProjectItem
                heading="Social Media Newsfeed"
                description="A Front-end only implementation of a social media newsfeed. I created this component to improve my vanilla css skillset and to showcase my ability for responsive design."
                image={require('../../assets/images/newsfeed_component.png').default}
                isImageLast={true}
                repoPath="https://github.com/ecetino/newsfeedComponent"
                demoPath="https://newsfeed-component-demo.vercel.app"
            />
            <ProjectItem
                heading="Trips Ahoy"
                description="An open-source service-oriented travel platform for booking and exploring travel destinations. I designed a complex backend system for the tours service to handle production level traffic."
                image={require('../../assets/images/trips_ahoy.png').default}
                repoPath="https://github.com/trips-ahoy/tours-service"
            />
            <ProjectItem
                heading="Slam Dunk Supplies"
                description="An open-source E-commerce app for sports equipment with service-oriented architecture. I improved the user product viewing experience by implementing a responsive gallery UI."
                image={require('../../assets/images/slam_dunk_supplies.png').default}
                isImageLast={true}
                repoPath="https://github.com/Slam-Dunk-Supplies/gallery"
            />
        </div>
    );
};
