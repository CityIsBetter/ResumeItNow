export interface PersonalDetails {
    fullName: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
  }
  
  export interface WorkExperience {
    jobTitle: string;
    companyName: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }
  
  export interface Education {
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    grade: string;
  }
  
  export interface Skill {
    category: string;
    skills: string;
  }
  
  export interface Project {
    projectName: string;
    description: string;
    link: string;
  }
  
  export interface Language {
    language: string;
    proficiency: string;
  }
  
  export interface Certification {
    certificationName: string;
    issuingOrganization: string;
    issueDate: string;
  }
  
  export interface ResumeData {
    personalDetails: PersonalDetails;
    objective: string;
    workExperience: WorkExperience[];
    education: Education[];
    skills: Skill[];
    projects: Project[];
    languages: Language[];
    certifications: Certification[];
  }