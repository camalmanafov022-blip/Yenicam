export type Language = 'az' | 'en';

export interface SocialLinks {
  github: string;
  linkedin: string;
  telegram: string;
  instagram?: string;
  twitter?: string;
}

export interface ProfileData {
  name: string;
  titleAz: string;
  titleEn: string;
  subtitleAz: string;
  subtitleEn: string;
  locationAz: string;
  locationEn: string;
  email: string;
  phone: string;
  statusAz: string;
  statusEn: string;
  bioAz: string;
  bioEn: string;
  fullStoryAz: string;
  fullStoryEn: string;
  socials: SocialLinks;
  yearsExperience: number;
  completedProjects: number;
  clientSatisfaction: string;
  portraitImage: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  descriptionAz: string;
  descriptionEn: string;
}

export interface ProjectItem {
  id: string;
  titleAz: string;
  titleEn: string;
  category: 'web' | 'mobile' | 'system' | 'design';
  categoryLabelAz: string;
  categoryLabelEn: string;
  year: string;
  summaryAz: string;
  summaryEn: string;
  challengeAz: string;
  challengeEn: string;
  solutionAz: string;
  solutionEn: string;
  impactAz: string;
  impactEn: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  periodAz: string;
  periodEn: string;
  roleAz: string;
  roleEn: string;
  company: string;
  location: string;
  descriptionAz: string;
  descriptionEn: string;
  achievementsAz: string[];
  achievementsEn: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  degreeAz: string;
  degreeEn: string;
  institutionAz: string;
  institutionEn: string;
  detailsAz: string;
  detailsEn: string;
}

export interface ArticleItem {
  id: string;
  titleAz: string;
  titleEn: string;
  readTimeAz: string;
  readTimeEn: string;
  dateAz: string;
  dateEn: string;
  categoryAz: string;
  categoryEn: string;
  excerptAz: string;
  excerptEn: string;
  contentAz: string[];
  contentEn: string[];
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  roleAz: string;
  roleEn: string;
  company: string;
  textAz: string;
  textEn: string;
}
