import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "My portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description: "My key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "My experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Me",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description: "My open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Anushka Shelke's resume.",
    metadata: {
      title: "Resume",
      description: "My resume.",
    },
  },
};
