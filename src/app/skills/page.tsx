import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import scss from '../../../public/scss.png';
import js from '../../../public/js.png';
import chash from '../../../public/chash.svg';
import ts from '../../../public/ts-logo.svg';
import php from '../../../public/php-logo.svg';
import java from '../../../public/java.png';
import dart from '../../../public/dart.svg';
import react from '../../../public/react.png';
import nodejs from '../../../public/nodejsDark.svg';
import git from '../../../public/git.svg';
import cicd from '../../../public/cicd.png';
import nextjs from '../../../public/nextjs.jpeg';
import tailwind from '../../../public/tailwind.png';
import angular from '../../../public/angular.png';
import flutter from '../../../public/flutter.png';
import rabbitMQ from '../../../public/rabbitMQ.svg';
import sql from '../../../public/sql-server.png';
import elasticsearch from '../../../public/elasticsearch.svg';
import mongo from '../../../public/mongo.png';
import aws from '../../../public/aws.png';
import gitlab from '../../../public/gitlab.svg';
import laravel from '../../../public/laravel.svg';
import vercel from '../../../public/vercel.svg';
import FramerWrapper from "@/components/FramerWrapper";

export interface Technology {
  alt: string;
  img: string;
}

interface TechnologyCategory {
  title: string;
  items: Technology[];
}

const skillPage = () => {
  const technologies: TechnologyCategory[] = [
    {
      title: "Client Side",
      items: [
        { alt: "React", img: react },
        { alt: "Nextjs", img: nextjs },
        { alt: "Angular", img: angular },
        { alt: "Flutter", img: flutter },
        { alt: "SCSS", img: scss },
        { alt: "Tailwind", img: tailwind },
        { alt: "JavaScript", img: js },
        { alt: "Typescript", img: ts },
        { alt: "Dart", img: dart },
      ],
    },
    {
      title: "Server Side",
      items: [
        { alt: "Node.js", img: nodejs },
        { alt: "C#", img: chash },
        { alt: "PHP", img: php },
        { alt: "Laravel", img: laravel },
        { alt: "Java", img: java },
        { alt: "RabbitMQ", img: rabbitMQ },
        { alt: "SQL", img: sql },
        { alt: "Mongodb", img: mongo },
        { alt: "Elasticsearch", img: elasticsearch },
      ],
    },
    {
      title: "DevOps",
      items: [
        { alt: "Git", img: git },
        { alt: "Gitlab", img: gitlab },
        { alt: "CI/CD", img: cicd },
      ],
    },
    {
      title: "Cloud Providers",
      items: [
        { alt: "aws", img: aws },
        { alt: "vercel", img: vercel },
      ],
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins bg-white text-xl w-full text-primary max-sm:text-lg">
            My exceptional skills in Angular, Next.js, React, and Node.js drive the creation of high-quality software solutions,
            delivering outstanding performance, reliability, and cutting-edge responsive UIs.
          </p>
        </FramerWrapper>
        {technologies.map((category, index) => (
          <FramerWrapper
            key={category.title}
            className="block mt-8"
            y={100}
            delay={index * 0.10}
          >
            <h1 className="gap-2 underline text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
              {category.title}
            </h1>
            <div className="w-full h-fit flex flex-wrap justify-start items-center gap-6">
              <SkillsFooter items={category.items} />
            </div>
          </FramerWrapper>
        ))}
      </div>
    </div>
  );
};

export default skillPage;
