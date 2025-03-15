export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface Engineer {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
  skills: Skill[];
  experience: number; // years
  github?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}
