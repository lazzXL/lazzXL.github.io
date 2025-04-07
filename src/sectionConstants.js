const themeColor = localStorage.getItem('themeColor') || 'purple';

export const languages = [{ language: "Portuguese", level: "Native", color: `bg-${themeColor}-100` },
{ language: "English", level: "C2 Proficient", color: `bg-${themeColor}-100` },
{ language: "Spanish", level: "B2 Intermediate", color: `bg-${themeColor}-200` },
{ language: "Italian", level: "B1 Intermediate", color: `bg-${themeColor}-200` },
{ language: "German", level: "A1 Beginner", color: `bg-${themeColor}-300` }];

export const bulletPointsFirstExperience = ["Participated in intensive training programs",
  "Completed compulsory technical school internship",
  "Engineered my own final project (PAP) with the technologies learned",
  "Integrated MVC architecture solutions using Laravel and pure PHP"];

export const bulletPointsSecondExperience = [
    "Assessed quality of AI models through systematic evaluation processes",
    "Adherence to a non-disclosure agreement (NDA) restricts the disclosure of specific details."];
export const proficiencies = [
  {
    level: "Advanced",
    items: ["JavaScript", "Kotlin", "C", "HTML", "PostgreSQL", "Node.js", "REST"]
  },
  {
    level: "Intermediate",
    items: ["Java","Python", "Git", "React", "TypeScript", "Bootstrap", "PHP", "Tailwind CSS"]
  },
  {
    level: "Basic",
    items: ["C#", "Docker", "Linux", "MySQL"]
  }
];
export const education = [
  {
    title: "BSc in Computer Science and Engineering",
    institution: "ISEL · 2022 - Current",
    details: "EQF level 6"
  },
  {
    title: "Technical High School Diploma in Programming & IT Management",
    institution: "Escola Bento Jesus de Caraça · 2020 - 2022",
    details: "EQF level 4"
  }
];
