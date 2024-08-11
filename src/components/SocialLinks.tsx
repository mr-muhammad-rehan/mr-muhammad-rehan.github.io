import { cn } from "@/lib/utils";
import { Linkedin, Twitter, MessageCircle, Mail, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Twitter", link: "https://x.com/rehandevprgmr", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/mmd-rehan/", icon: <Linkedin /> },
    { name: "Mail", link: "mailto:mrmuhammadrehan65@gmail.com", icon: <Mail /> },
    { name: "Quick Chat", link: "/contact", icon: <MessageCircle /> },
    { name: "External", link: "#", icon: <ExternalLink /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

            <Link target="blank"
              href={itm.link}
              className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
