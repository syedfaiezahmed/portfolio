import React from 'react';

interface ProjectSectionProps {
  imgUrl: string;
  title: string;
  description: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72"
        style={{
          backgroundImage: `url(${imgUrl})`, // ✅ Correct syntax for setting a background image
          backgroundSize: "cover",
          backgroundPosition: "center", // Ensures the image is centered properly
        }}
      ></div>
      <div className="text-white">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectSection;
