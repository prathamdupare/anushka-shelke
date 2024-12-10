import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ProjectCard from "@/components/experience/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { featuredContributions } from "@/config/contributions";
import { featuredExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import AnushkaImg from "@/public/Anushka-img.jpg";
import { LinkedinIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
};

export default async function IndexPage() {
  const links = [
    {
      name: "LinkedIn",
      url: "http://www.linkedin.com/in/anushka-shelke-b90109212",
      icon: <LinkedinIcon />,
    },
  ];

  const achievements = [
    {
      title:
        "Advancing Biocuration and Ligand Design with Large Language Models for Rare Diseases",
      event: "Drug Discovery Chemistry",
      location: "San Diego, CA",
      date: "April 1-4, 2024",
    },
    {
      title:
        "Leveraging Generative AI and Predictive Modeling via LLMs for Biomedical Research",
      event: "Bio-IT World Conference",
      location: "Boston, MA",
      date: "April 15-17, 2024",
    },
    {
      title: "Fighting Rare Diseases with AI",
      event: "Discovery on Target Conference",
      location: "Boston, MA",
      date: "September 2023",
    },
  ];

  const education = [
    {
      title: "BS-MS: Data Science & Engineering",
      institution:
        "Indian Institute of Science Education and Research (IISER), Bhopal",
      date: "August 2024",
      details: [""],
    },
    {
      title: "High Secondary (12th)",
      institution: "Vasantrao Naik Junior College",
      date: "2017-2019",
      details: [""],
    },
    {
      title: "High School (10th)",
      institution: "St. Lawrence High School",
      date: "2017",
      details: [""],
    },
  ];

  const projects = [
    {
      title: "Burnout Prediction Through Sensors",
      date: "August 2024 — Present",
      role: "Intern, Systems and Informatics Research Laboratory, IISERB, MP",
      description: [
        "Currently working on a research project focused on burnout detection in college students, utilizing sensors, shimmers, and mobile sensing technologies.",
        "Assisting in the manual collection of physiological and behavioral data to study patterns associated with burnout.",
        "Collaborating with the research team to analyze data and contribute to the development of an effective system for early detection of burnout.",
      ],
    },
    {
      title: "LLM-Based AI Agent for Automated Drug Discovery",
      date: "May 2024 — July 2024",
      role: "Intern, IISERB, MP",
      description: [
        "Developed DrugAgent, an AI-driven framework leveraging Large Language Models (LLMs) to automate the drug discovery process.",
        "Integrated tools like DisGeNET, ChEMBL, and REINVENT to identify gene-disease associations, ligands, and drug candidates.",
        "Demonstrated DrugAgent in a case study on Alzheimer’s Disease, generating potential drug candidates and improving the accuracy and speed of drug development.",
      ],
    },
    {
      title:
        "LigandGPT: Large Language Model-Based Platform for Cancer Drug Design",
      date: "April 2024",
      role: "MS Thesis, IISERB, MP",
      description: [
        "Pioneered the creation of CancerGPT, a GPT-based platform targeting protein kinases crucial in cancer treatment.",
        "Optimized DrugGPT to detect molecules binding with Kinase proteins, leveraging databases like Zinc20 for ligand generation.",
        "Achieved a 30% improvement in molecule identification accuracy, accelerating cancer drug discovery timelines.",
      ],
    },
    {
      title: "Molecular Machine Learning with RNN",
      date: "April 2023",
      role: "BS Thesis, IISERB, MP",
      description: [
        "Specialized in employing Recurrent Neural Networks (RNNs) within Generative AI models like BIMODAL and NADE.",
        "Focused on designing GPCR inhibitors and generating novel molecules for drug discovery with pharmacological validation.",
      ],
    },
    {
      title:
        "IoT and Computer Vision for Analysing Players on the IISERB Badminton Court",
      date: "November 2021",
      role: null,
      description: [
        "Leveraged IoT and Computer Vision to identify players and classify sports from images.",
        "Achieved over 95% accuracy in player detection using YOLOv3 with OpenCV and a custom CNN model.",
      ],
    },
  ];

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mt-52 md:mt-40">
          {/* <Link
                        href={"siteConfig.links.twitter"}
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Follow along on Twitter
                    </Link> */}
          {/* <div className="max-w-[16rem]"> */}
          <Image
            src={AnushkaImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary dark:border-white dark:bg-white"
            alt="anushka-shelke-img"
          />
          {/* </div> */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Anushka Shelke
          </h1>
          <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
            Data Science Enginner
          </h3>

          <div className="flex justify-center space-x-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                <Button className="flex gap-3">
                  {link.icon}
                  {link.name}
                </Button>
              </a>
            ))}
          </div>

          <p className="test-xs">
            I am a graduate MS student in Data Science and Engineering at IISER
            Bhopal, specializing in Machine Learning, AI, Deep Learning, NLP,
            and Generative AI. With hands-on experience in coding and model
            development, I am focused on applying these skills to solve
            real-world challenges and create impactful solutions.
          </p>

          <div className="flex justify-center space-x-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                <i className={`fab fa-${link.icon} text-2xl`} />
              </a>
            ))}
          </div>

          {/* <Accordion
                        type="single"
                        collapsible
                        className="flex items-center w-full max-w-[35rem]"
                    >
                        <AccordionItem value="main-ques" className="flex-1">
                            <AccordionTrigger>
                                <p className="flex items-center">
                                    Can you guess my favorite coding problem?
                                </p>
                            </AccordionTrigger>
                            <AccordionContent>
                                &ldquo;Check if a given string is palindrome or
                                not&rdquo;
                                <Icons.laughEmoji className="w-4 h-5 md:w-5 ml-2" />
                            </AccordionContent>
                        </AccordionItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                asChild
                                className="cursor-pointer"
                            >
                                <Icons.questionMark className="w-5 h-5 ml-3 text-muted-foreground " />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel className="flex items-center text-muted-foreground">
                                    <Icons.infoMark className="w-4 h-4 mr-2" />
                                    Hint: Anushka
                                </DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </Accordion> */}

          {/* <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Full-stack web developer with two years&apos; experience
                        who is innovative and ambitious. Excellent analytical
                        and creative abilities, with a heavy emphasis on writing
                        well-documented code.
                    </p> */}

          <div className="flex flex-col  mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <Link
              href={"https://github.com/Anushka85252"}
              target="_blank"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
            </Link>
            <Link
              href={"/contact"}
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                })
              )}
            >
              <Icons.contact className="w-4 h-4 mr-2" /> Contact
            </Link>
          </div>
          <Icons.chevronDown className="h-6 w-6 mt-10" />
        </div>
      </section>
      <section
        id="skills"
        className="container space-y-6 bg-slate-50 dark:bg-transparent py-10"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {pagesConfig.skills.title}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {pagesConfig.skills.description}
          </p>
        </div>
        <SkillsCard skills={featuredSkills} />
        <Link href="/skills" className="flex justify-center">
          <Button variant={"outline"} className="rounded-xl">
            <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
          </Button>
        </Link>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant skills.
                    </p>
                </div> */}
      </section>
      <section
        id="experience"
        className="container space-y-6 dark:bg-transparent py-10 my-14"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {pagesConfig.experience.title}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {pagesConfig.experience.description}
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4  md:w-full lg:grid-cols-3">
          {featuredExperiences.map((exp) => (
            <ProjectCard key={exp.id} project={exp} />
          ))}
        </div>
        <Link href="/experience" className="flex justify-center">
          <Button variant={"outline"} className="rounded-xl">
            <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
          </Button>
        </Link>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant experiences.
                    </p>
                </div> */}
      </section>

      <section
        id="Achievements"
        className="container space-y-6 bg-slate-50 dark:bg-transparent py-10 my-14"
      >
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-sm font-medium">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{achievement.event}</p>
                <p className="text-xs text-gray-500">{achievement.location}</p>
                <p className="text-xs text-gray-500">{achievement.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="container space-y-6 dark:bg-transparent py-10 my-14"
      >
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Education
        </h2>
        <div className="flex flex-col md:flex-row  gap-2">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-sm w-[300px] md:w-[500px]">
              <CardHeader>
                <CardTitle>{edu.title}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{edu.date}</p>
                <ul className=" pl-4 space-y-2 mt-2">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="contributions"
        className="container space-y-6 bg-slate-50 dark:bg-transparent py-10 my-14"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            {pagesConfig.contributions.title}
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {pagesConfig.contributions.description}
          </p>
        </div>
        <div className="mx-auto justify-center gap-4  md:w-full lg:grid-cols-3">
          <ContributionCard contributions={featuredContributions} />
        </div>
        <Link href="/contributions" className="flex justify-center">
          <Button variant={"outline"} className="rounded-xl">
            <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
          </Button>
        </Link>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant skills.
                    </p>
                </div> */}
      </section>
      <section id="projects" className="py-8">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-sm">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.date}</CardDescription>
              </CardHeader>
              <CardContent>
                {project.role && <p className="font-medium">{project.role}</p>}
                <ul className="list-disc pl-4 space-y-2 mt-2">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
