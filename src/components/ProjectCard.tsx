import React from 'react';
import { Card } from 'react-bootstrap';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
    stars: number;
    forks: number;
    issues: number;
    status: 'active' | 'seeking_contributors' | 'archived';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    contributors: number;
    goodFirstIssue: boolean;
    license: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <div className="mb-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge bg-primary me-1 mb-1">
              {tech}
            </span>
          ))}
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark d-flex align-items-center">
            <Github size={16} className="me-1" /> GitHub
          </a>
          <small className="text-muted">Stars: {project.stars} | Forks: {project.forks} | Issues: {project.issues}</small>
        </div>
        <div className="mb-2">
          <span className={`badge bg-${project.status === 'active' ? 'success' : project.status === 'seeking_contributors' ? 'warning' : 'secondary'} me-1`}>
            {project.status.replace(/_/g, ' ')}
          </span>
          <span className={`badge bg-${project.difficulty === 'beginner' ? 'info' : project.difficulty === 'intermediate' ? 'primary' : 'danger'} me-1`}>
            {project.difficulty.replace(/_/g, ' ')}
          </span>
          {project.goodFirstIssue && <span className="badge bg-success">Good First Issue</span>}
        </div>
        <small className="text-muted">Contributors: {project.contributors} | License: {project.license}</small>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;