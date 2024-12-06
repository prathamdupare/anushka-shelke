import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "biomedical-nlp",
    companyName: "BIOMEDICAL DATA INTEGRATION AND NLP AUTOMATION WITH KG",
    type: "Internship",
    category: ["Biomedical", "NLP", "Knowledge Graphs"],
    shortDescription:
      "Automated data handling, advanced NLP tasks, and knowledge graph exploration for biomedical datasets.",
    websiteLink: "",
    techStack: ["Python", "NLP", "Knowledge Graphs", "Web Scraping"],
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-09-30"),
    companyLogoImg: "/experience/iiserb/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "During my internship at IISERB, MP, I contributed to automating processes for managing biomedical data from platforms like ChEMBL, Protein Drug Bank, and MedGen. This improved efficiency by 40% in data handling.",
        "I also developed advanced NLP skills, including text preprocessing, sentiment analysis, and entity recognition, achieving a 95% accuracy rate.",
        "Additionally, I explored knowledge graphs to organize complex biomedical relationships, enhancing data visualization and interpretation by 30%.",
      ],
      bullets: [
        "Automated data download and web scraping processes to enhance efficiency by 40%.",
        "Developed NLP pipelines achieving 95% accuracy in tasks such as text preprocessing and entity recognition.",
        "Explored knowledge graphs to improve data organization and visualization by 30%.",
      ],
    },
  },
  {
    id: "social-media-fact-checking",
    companyName:
      " SOCIAL MEDIA FACT-CHECKING WITH NLP AND DEEP LEARNING ,IISERB, MP",
    type: "Internship",
    category: ["NLP", "Deep Learning", "Fact-Checking"],
    shortDescription:
      "Led social media fact-checking initiatives using NLP and Deep Learning to detect misinformation.",
    websiteLink: "",
    techStack: ["Python", "Deep Learning", "NLP", "Feverous Dataset"],
    startDate: new Date("2022-05-01"),
    endDate: new Date("2022-07-31"),
    companyLogoImg: "/experience/iiserb/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "I spearheaded initiatives for fact-checking social media content at IISERB, MP, leveraging advanced NLP and Deep Learning techniques.",
        "I used the Feverous dataset to ensure high accuracy in detecting misinformation, improving detection and mitigation by 90%.",
      ],
      bullets: [
        "Led initiatives to detect misinformation on social media using NLP and Deep Learning.",
        "Improved accuracy of content verification by 90% using robust datasets like Feverous.",
        "Utilized cutting-edge technologies to enhance misinformation detection and mitigation.",
      ],
    },
  },
  {
    id: "econometric-insights",
    companyName:
      " ECONOMETRIC INSIGHTS UNVEILED: UNLEASHING STATA PROFICIENCY ,IISERB, MP",
    type: "Internship",
    category: ["Econometrics", "STATA", "Data Analysis"],
    shortDescription:
      "Gained proficiency in STATA for econometric analyses, applying statistical techniques to time-series data.",
    websiteLink: "",
    techStack: ["STATA", "Econometrics", "Data Analysis"],
    startDate: new Date("2021-12-01"),
    endDate: new Date("2022-01-31"),
    companyLogoImg: "/experience/iiserb/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "At IISERB, MP, I conducted in-depth analyses using STATA, focusing on regression and other econometric techniques applied to time-series datasets.",
        "This internship allowed me to extract valuable insights from complex economic data and gain practical knowledge in applying statistical methods.",
      ],
      bullets: [
        "Conducted analyses using STATA, including regression on time-series datasets.",
        "Extracted valuable insights from complex economic data.",
        "Gained practical knowledge of applying econometric methods to real-world scenarios.",
      ],
    },
  },

  {
    id: "iiserb",
    companyName:
      "Indian Institute of Science Education and Research (IISER), Bhopal",
    type: "Education",
    category: [
      "Data Science & Engineering",
      "Econometrics",
      "STATA",
      "Data Analysis",
    ],
    shortDescription:
      "Gained proficiency in STATA for econometric analyses and completed a BS-MS in Data Science & Engineering with a CPI of 7.57/10.",
    websiteLink: "",
    techStack: ["STATA", "Econometrics", "Data Analysis"],
    startDate: new Date("2017-08-01"),
    endDate: new Date("2024-08-01"),
    companyLogoImg: "/experience/iiserb/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "At IISER Bhopal, I pursued a BS-MS in Data Science & Engineering, achieving a CPI of 7.57/10. The program provided a solid foundation in data analysis, econometrics, and programming.",
        "During the program, I conducted in-depth analyses using STATA, focusing on regression and econometric techniques applied to time-series datasets. This experience allowed me to extract valuable insights from complex data and apply statistical methods to real-world problems.",
      ],
      bullets: [
        "Completed a BS-MS in Data Science & Engineering at IISER Bhopal with a CPI of 7.57/10.",
        "Conducted analyses using STATA, including regression on time-series datasets.",
        "Extracted valuable insights from complex economic data.",
        "Gained practical knowledge in applying econometric methods to real-world scenarios.",
      ],
    },
    additionalEducation: [
      {
        level: "High Secondary (12th)",
        institution: "Vasantrao Naik Junior College",
        years: "2017-2019",
        percentage: "65.54%",
      },
      {
        level: "High School (10th)",
        institution: "St. Lawrence High School",
        year: "2017",
        percentage: "92.40%",
      },
    ],
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
