export interface Engineer {
  id: string;
  name: string;
  position: string;
  avatar: string;
  bio: string;
  skills: string[];
  experience: number;
  links: {
    github: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  created_at: string;
  updated_at: string;
}

export type NewEngineer = Omit<Engineer, "id" | "created_at">;
