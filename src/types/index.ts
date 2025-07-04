export interface Project {
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
}
