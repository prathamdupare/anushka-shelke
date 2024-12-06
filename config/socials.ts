import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@AnushkaShelke",
    icon: Icons.gitHub,
    link: "https://github.com/AnushkaShelke",
  },
  {
    name: "LinkedIn",
    username: "Anushka Shelke",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/AnushkaShelke",
  },
  {
    name: "Twitter",
    username: "@AnushkaShelke",
    icon: Icons.twitter,
    link: "https://twitter.com/AnushkaShelke",
  },
  {
    name: "Gmail",
    username: "Anushka.Shelke02",
    icon: Icons.gmail,
    link: "mailto:Anushka.Shelke02@gmail.com",
  },
];
