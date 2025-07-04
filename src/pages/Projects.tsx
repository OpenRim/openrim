import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '@components/ProjectCard';
import type { Project } from '../types';

const dummyProjects: Project[] = [
  {
    name: "OpenRim Core",
    description: "The foundational framework for OpenRim projects.",
    technologies: ["TypeScript", "Node.js", "React"],
    githubLink: "https://github.com/openrim/openrim-core",
    stars: 1200,
    forks: 350,
    issues: 25,
    status: "active",
    difficulty: "advanced",
    contributors: 80,
    goodFirstIssue: false,
    license: "MIT",
  },
  {
    name: "OpenRim UI Library",
    description: "A reusable UI component library for OpenRim applications.",
    technologies: ["TypeScript", "React", "Storybook", "SCSS"],
    githubLink: "https://github.com/openrim/openrim-ui",
    stars: 850,
    forks: 200,
    issues: 15,
    status: "seeking_contributors",
    difficulty: "intermediate",
    contributors: 45,
    goodFirstIssue: true,
    license: "MIT",
  },
  {
    name: "OpenRim CLI Tool",
    description: "Command-line interface for managing OpenRim projects.",
    technologies: ["TypeScript", "Node.js", "Commander.js"],
    githubLink: "https://github.com/openrim/openrim-cli",
    stars: 500,
    forks: 100,
    issues: 5,
    status: "active",
    difficulty: "beginner",
    contributors: 20,
    goodFirstIssue: true,
    license: "Apache-2.0",
  },
  {
    name: "OpenRim Docs",
    description: "Documentation website for all OpenRim projects.",
    technologies: ["Markdown", "Next.js", "MDX"],
    githubLink: "https://github.com/openrim/openrim-docs",
    stars: 300,
    forks: 50,
    issues: 2,
    status: "active",
    difficulty: "beginner",
    contributors: 10,
    goodFirstIssue: true,
    license: "MIT",
  },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="hero-section py-5 bg-light text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">{t('projects.title')}</h1>
          <p className="lead">Explore our open source projects and find ways to contribute.</p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters-section py-4">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <button className="btn btn-outline-primary">{t('projects.filter.all')}</button>
            <button className="btn btn-outline-primary">{t('projects.filter.active')}</button>
            <button className="btn btn-outline-primary">{t('projects.filter.seeking_contributors')}</button>
            <button className="btn btn-outline-primary">{t('projects.filter.beginner_friendly')}</button>
            {/* More filters can be added here */}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {dummyProjects.map((project) => (
              <div className="col" key={project.name}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
