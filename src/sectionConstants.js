const themeColor = localStorage.getItem('themeColor') || 'purple';

export const languages = [{ language: "Portuguese", level: "Native", color: `bg-${themeColor}-100` },
{ language: "English", level: "C2 Proficient", color: `bg-${themeColor}-100` },
{ language: "Spanish", level: "B2 Intermediate", color: `bg-${themeColor}-200` },
{ language: "Italian", level: "B1 Intermediate", color: `bg-${themeColor}-200` },
{ language: "German", level: "A1 Beginner", color: `bg-${themeColor}-300` }];

export const bulletPointsExperience = ["Participated in intensive training programs",
  "Completed compulsory technical school internship",
  "Engineered my own final project (PAP) with the technologies learned",
  "Integrated MVC architecture solutions using Laravel and pure PHP"];
export const proficiencies = [
  {
    level: "Advanced",
    items: ["JavaScript", "Kotlin", "C", "HTML", "PostgreSQL", "Node.js", "REST"]
  },
  {
    level: "Intermediate",
    items: ["Java", "Git", "React", "TypeScript", "Bootstrap", "MongoDB", "Tailwind CSS"]
  },
  {
    level: "Basic",
    items: ["Python", "C#", "Docker", "Linux", "MySQL"]
  }
];
export const education = [
  {
    title: "Computer Science and Engineering",
    institution: "ISEL · 2022 - Current",
    details: "EQF level 6"
  },
  {
    title: "Technical High School Diploma",
    institution: "Escola Bento Jesus de Caraça",
    details: "Programming & IT Management · EQF level 4"
  }
];
