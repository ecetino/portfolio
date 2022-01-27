import React from 'react';

import Button from '../../../../components/Button/button';

import './styles.scss';

interface ProjectItemProps {
  heading: string;
  description: string;
  image: string;
  repoPath?: string;
  demoPath?: string;
  isImageLast?: boolean;
};

export const ProjectItem = ({
  heading,
  description,
  image,
  repoPath,
  demoPath,
  isImageLast
}: ProjectItemProps) => {
  return (
    <div className="project-item" style={{ flexDirection: isImageLast ? 'row-reverse' : 'row' }}>
      <div className="project-item-image">
        <img src={image} alt="project screenshot" />
      </div>
      <div className="project-item-content">
        <h3>{heading}</h3>
        <h6>{description}</h6>
        <div className="project-item-content-buttons">
          {repoPath &&
            <Button
              label="View Repo"
              onClick={() => window.open(repoPath, "_blank")}
            />
          }
          {demoPath &&
            <Button
              label="View Demo"
              onClick={() => window.open(demoPath, "_blank")}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
