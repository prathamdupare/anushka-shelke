import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Versatile programming language widely used in AI, data science, and web development.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "PyTorch",
    description:
      "An open-source deep learning framework enabling scalable and flexible model development.",
    rating: 5,
    icon: Icons.pytorch,
  },
  {
    name: "TensorFlow",
    description:
      "A powerful framework for machine learning and deep learning with wide support.",
    rating: 5,
    icon: Icons.tensorflow,
  },
  {
    name: "Pandas",
    description:
      "Simplifies data analysis and manipulation with intuitive structures and tools.",
    rating: 5,
    icon: Icons.pandas,
  },
  {
    name: "Keras",
    description:
      "High-level neural networks API for quick and easy experimentation with deep learning.",
    rating: 4,
    icon: Icons.keras,
  },
  {
    name: "SciKit-Learn",
    description:
      "Machine learning library in Python offering simple and efficient tools for predictive analysis.",
    rating: 5,
    icon: Icons.scikitlearn,
  },
  {
    name: "NumPy",
    description:
      "Fundamental package for scientific computing, enabling powerful numerical calculations.",
    rating: 5,
    icon: Icons.numpy,
  },
  {
    name: "SciPy",
    description:
      "Enhances Python with modules for optimization, integration, and scientific computations.",
    rating: 4,
    icon: Icons.scipy,
  },
  {
    name: "OpenCV",
    description:
      "Open-source computer vision library offering tools for real-time image and video processing.",
    rating: 5,
    icon: Icons.opencv,
  },
  {
    name: "LLM / NLP",
    description:
      "Expertise in natural language processing and working with large language models.",
    rating: 5,
    icon: Icons.ai,
  },
  {
    name: "Hugging Face",
    description:
      "Premier library for state-of-the-art NLP models and transformer-based architectures.",
    rating: 5,
    icon: Icons.ai,
  },
  {
    name: "Computer Vision",
    description:
      "Specialized in enabling machines to interpret and analyze visual data effectively.",
    rating: 5,
    icon: Icons.dataVisualization,
  },
  {
    name: "Generative AI",
    description:
      "Creating AI models to generate text, images, or other data, fostering creativity and efficiency.",
    rating: 5,
    icon: Icons.generativeAI,
  },
  {
    name: "Data Visualization",
    description:
      "Transforming data into visually appealing and informative graphics and charts.",
    rating: 5,
    icon: Icons.dataVisualization,
  },
  {
    name: "Descriptive Analysis",
    description:
      "Providing insights by summarizing data patterns and trends effectively.",
    rating: 4,
    icon: Icons.descriptiveAnalysis,
  },
  {
    name: "Probability Theory",
    description:
      "Solid foundation in probabilistic reasoning for statistical modeling and machine learning.",
    rating: 4,
    icon: Icons.probabilityTheory,
  },
  {
    name: "Statistical Analysis",
    description:
      "In-depth knowledge of analyzing data to infer meaningful trends and patterns.",
    rating: 5,
    icon: Icons.statisticalAnalysis,
  },
  {
    name: "LaTeX",
    description:
      "Creating high-quality, professional documents for academic and technical writing.",
    rating: 4,
    icon: Icons.latex,
  },
  {
    name: "R",
    description:
      "Programming language designed for statistical computing and graphics.",
    rating: 4,
    icon: Icons.r,
  },
  {
    name: "Stata",
    description:
      "Comprehensive software for data management, analysis, and visualization.",
    rating: 3,
    icon: Icons.stata,
  },
  {
    name: "Neo4j",
    description:
      "Graph database management system enabling efficient representation of connected data.",
    rating: 3,
    icon: Icons.neo4j,
  },
  {
    name: "Cloud",
    description:
      "Utilizing cloud platforms for scalable, flexible, and reliable solutions.",
    rating: 4,
    icon: Icons.cloud,
  },
  {
    name: "Excel",
    description:
      "Expertise in spreadsheet modeling, data analysis, and formula optimization.",
    rating: 5,
    icon: Icons.excel,
  },
  {
    name: "MySQL",
    description:
      "Efficiently managing relational databases for scalable applications.",
    rating: 4,
    icon: Icons.mysql,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
