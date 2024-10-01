import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "UrlShortener - Simple and free URL shortener in next.js",
      description:
        "This is a URL shortener project built with Next.js. It allows users to shorten long URLs and provides a short link that redirects to the original URL.",
      tags: ["Postgress", "Authjs", "Typescript", "Nextjs"],
      link: "https://github.com/mr-muhammad-rehan/shorturl",
    },
    {
      title: "ChatCat Application - Multi-Chatroom application for using socket.io",
      description:
        "ChatCat is a multi-chatroom application built using Node.js. It allows users to engage in conversations within multiple chatrooms.",
      tags: ["Socket.io", "Node.js", "JavaScript"],
      link: "https://github.com/mr-muhammad-rehan/chatCat",
    },
    {
      title: "ZK Door Opener - Zkteco Access controlled dooer openner",
      description:
        "ZK Door Opener is windows application to open access door with a click from computer",
      tags: ["Windows Forms", ".NET Desktop", "C#", "ZKTeco"],
      link: "https://github.com/mr-muhammad-rehan/ZK-Device-Door-Opener",
    },
    {
      title: "Zkteco SpeedFace-V5L-RFID - Attendance management system",
      description:
        "Access is a comprehensive Attendance Device Management System designed to handle biometric and access control data from various devices. This system is built using Laravel, a PHP framework, and provides functionalities to store and manage user and fingerprint data.",
      tags: ["Laravel", "Php", "Linux", "ZKTeco"],
      link: "https://github.com/mr-muhammad-rehan/ZK-Device-Door-Opener",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base bg-white p-4">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of invention, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
