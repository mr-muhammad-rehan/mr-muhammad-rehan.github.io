import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "Coding" },
    { hobby: "Playing Games" },
    { hobby: "Watching Action" },
    { hobby: "Exploring new Technologies" },
    { hobby: "Developing Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">

        <Heading>
          Software Engineer And Web <br /> Developer, Based In UAE, Dubai.
        </Heading>

        <FramerWrapper y={0} x={100} >
          <p className=" font-poppins bg-white text-xl w-full text-primary max-sm:text-lg">
            I am a software engineer working on web applications and mobile applications. I have been
            developing professionally for 7 years but tinkering since a kid. I started in tech with internships, freelance services and
            part time positions during college.
            I have a bit off a diverse job history. I have been working on IOT’s, Mobile App Development, System Engineer,
            graphic/web design, web app development and sysadmin/DevOps.
            <br />I can help everywhere in the stack and I love wearing
            multiple hats to an extent. Although, I do think my strongest skills are in software engineering.
            Most of my positions utilized agile-like development processes using Jira.
            A day in my life may consist of: prepping web art, fixing some front-end bugs, adding an API endpoint, dockerizing an
            application, database design, configuring a library, setting up a build or deployment plan
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col " y={100} delay={0.30}>
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
