import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Project 1', appLink: '#', repoLink: '#' },
    { title: 'Project 2', appLink: '#', repoLink: '#' },
    // Add more projects here
  ];

  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h2>{project.title}</h2>
          <a href={project.appLink} target="_blank" rel="noreferrer">Deployed App</a>
          <a href={project.repoLink} target="_blank" rel="noreferrer">GitHub Repo</a>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;