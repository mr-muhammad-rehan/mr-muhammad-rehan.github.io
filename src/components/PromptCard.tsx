"use client";

import { Prompt } from "@/app/prompts/page";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Copy, Tag } from "lucide-react";
import confetti from "canvas-confetti";

interface IPromptCardProps extends Prompt { }

const PromptCard = ({ title, description, inceptions, tags }: IPromptCardProps) => {
    const onCopy = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        event.stopPropagation();
        navigator.clipboard.writeText(description);

        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x, y },
        });
    }


    return (
        <Card className="bg-gray-800 text-white max-w-md min-h-md">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px]">
                <hr className="mt-2 w-full border-gray-600" />
                <p className="mt-2 text-base font-poppins"> {description}</p>
                <br />
                {inceptions.map((inception, index) => (
                    <p key={index}>
                        {inception.key}: <span className="text-red-500"> {inception.value}</span>
                    </p>
                ))}
            </CardContent>
            <CardFooter className="flex flex-col pb-2">
                <div className="flex flex-row items-start">
                    {tags.map((tag, index) => (
                        <Badge className="gap-2" key={`${tag + index}`}>
                            <Tag className="h-5 w-5" />
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className="w-full flex flex-row justify-end">
                    <Copy className="h-5 w-5 cursor-pointer" onClick={(e) => onCopy(e)} />
                </div>
            </CardFooter>
        </Card>
    );
}

export default PromptCard;