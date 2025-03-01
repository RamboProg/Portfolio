"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiMysql, SiMongodb, SiDocker, SiAmazonwebservices, SiNestjs, SiFirebase, SiApachekafka, SiVuedotjs, SiExpress, SiPostgresql, SiDotnet, SiCplusplus, SiPython } from 'react-icons/si'

interface SkillBadgeProps {
  name: string
  level: number
  index: number
}

// Update the technologyIcons object with all stacks
const technologyIcons: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript />,
  'Next.js': <SiNextdotjs />,
  'React.js': <SiReact />,
  HTML5: <SiHtml5 />,
  CSS: <SiCss3 />,
  Nodejs: <SiNodedotjs />,
  Express: <SiExpress />,
  Tailwind: <SiTailwindcss />,
  Mongodb: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  Firebase: <SiFirebase />,
  Git: <SiGit />,
  MySQL: <SiMysql />,
  Docker: <SiDocker />,
  AWS: <SiAmazonwebservices />,
  'Nest.js': <SiNestjs />,
  Kafka: <SiApachekafka />,
  'Vue.js': <SiVuedotjs />,
  'Express.js': <SiExpress />,
  'ASP.NET': <SiDotnet />,
  'C#': <span>C#</span>,
  Java: <span>Java</span>,
  Python: <SiPython />,
  'C++': <SiCplusplus />,
  Unity: <span>Unity</span>, // Placeholder for Unity icon
};

export default function SkillIcons() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 p-4 bg-light rounded-lg">
      {Object.entries(technologyIcons).map(([name, icon]) => (
        <div key={name} className="flex flex-col justify-center items-center bg-light bg-indigo-900 p-4 rounded-lg shadow-md">
          <div className="text-4xl mb-2">{icon}</div>
          <span className="text-dark text-sm">{name}</span>
        </div>
      ))}
    </div>
  );
}

