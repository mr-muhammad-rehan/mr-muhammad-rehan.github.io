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
import nextjs from '../../../public/nextjs.jpeg';
import cplus from '../../../public/c++.jpeg';
import tailwind from '../../../public/tailwind.png';
import angular from '../../../public/angular.png';
import flutter from '../../../public/flutter.png';
import rabbitMQ from '../../../public/rabbitMQ.svg';
import sql from '../../../public/sql-server.png';
import elasticsearch from '../../../public/elasticsearch_logo.png';
import mongo from '../../../public/mongo.png';
import aws from '../../../public/aws.png';
import azure from '../../../public/azure.webp';
import vercel from '../../../public/vercel.svg';
import FramerWrapper from "@/components/FramerWrapper";
const skillPage = () => {

  const frontend = [
    { alt: "js", img: js },
    { alt: "ts", img: ts },
    { alt: "dart", img: dart },
    { alt: "cplus", img: cplus },
    { alt: "react", img: react },
    { alt: "nextjs", img: nextjs },
    { alt: "angular", img: angular },
    { alt: "scss", img: scss },
    { alt: "tailwind", img: tailwind },
    { alt: "flutter", img: flutter },
  ];
  const framework = [
    { alt: "nodejs", img: nodejs },
    { alt: "C#", img: chash },
    { alt: "PHP", img: php },
    { alt: "java", img: java },
    { alt: "rabbitMQ", img: rabbitMQ },
    { alt: "sql", img: sql },
    { alt: "mongodb", img: mongo },
    { alt: "elasticsearch", img: elasticsearch },
  ];
  const tools = [
    { alt: "aws", img: aws },
    { alt: "azure", img: azure },
    { alt: "vercel", img: vercel },
  ];


  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200} >

          <p className="font-poppins bg-white text-xl w-full text-primary max-sm:text-lg">
            My exceptional skills in Angular, Next.js, React and Node.js drive the creation of high-quality software solutions,
            delivering outstanding performance, reliability, and cutting-edge responsive UIs.
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.30} className="block mt-8">
          <h1 className="gap-2 underline text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Client Side
          </h1>
          <hr />
          <div className="w-full h-fit flex flex-wrap justify-between items-center">
            <SkillsFooter items={frontend} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block mt-8" y={100} delay={0.32}>
          <h1 className="gap-2 underline text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Server Side
          </h1>
          <hr />
          <div className="w-full h-fit flex flex-wrap justify-between items-center">
            <SkillsFooter items={framework} />
          </div>
        </FramerWrapper>
        <FramerWrapper className="block mt-8" y={100} delay={0.32}>
          <h1 className="gap-2 underline text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Cloud Providers
          </h1>
          <hr />
          <div className="w-full h-fit flex flex-wrap justify-between items-center">
            <SkillsFooter items={tools} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
