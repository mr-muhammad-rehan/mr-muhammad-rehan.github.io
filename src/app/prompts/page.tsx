"Use client"

import dynamic from "next/dynamic";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { SquareTerminal } from "lucide-react";


const PromptCard = dynamic(() => import('@/components/PromptCard'), {
    ssr: false,
});

export interface Inception {
    key: string;
    value: string;
}

export interface Prompt {
    title: string;
    description: string;
    inceptions: Inception[];
    tags: string[]; 
}

const Prompts = () => {

    const prompts: Prompt[] = [
        {
            title: "Convert CSS code to Tailwind Classes",
            description: "Convert the following CSS code into Tailwind CSS classes and give me the result in a code block. Make sure to remove any browser prefixes. Only give me what I can put into my HTML elements.",
            inceptions: [
                { key: 'Code', value: '{selection}' },
                { key: 'Tailwind CSS Classes', value: '' }
            ],
            tags: ["css", "tailwind", "conversion"]
        },
        {
            title: "Debug JavaScript Code",
            description: "Identify and fix the errors in the following JavaScript code snippet. Provide the corrected code along with an explanation of the errors.",
            inceptions: [
                { key: 'Code', value: '{selection}' },
                { key: 'Corrected Code', value: '' }
            ],
            tags: ["javascript", "debugging", "errors"]
        },
        {
            title: "Optimize Image for Web",
            description: "Suggest optimizations for the following image to make it more web-friendly. Include resizing, compression, and best practices for format selection.",
            inceptions: [
                { key: 'Image Details', value: '{selection}' },
                { key: 'Optimization Suggestions', value: '' }
            ],
            tags: ["images", "optimization", "web"]
        },
        {
            title: "Convert JSON to TypeScript Interface",
            description: "Based on the given JSON object, generate a TypeScript interface that accurately represents the data structure.",
            inceptions: [
                { key: 'JSON Object', value: '{selection}' },
                { key: 'TypeScript Interface', value: '' }
            ],
            tags: ["typescript", "json", "interface"]
        },
        {
            title: "Create Responsive Grid with CSS Grid",
            description: "Using the following layout requirements, provide a CSS Grid implementation that creates a responsive grid layout.",
            inceptions: [
                { key: 'Layout Requirements', value: '{selection}' },
                { key: 'CSS Grid Code', value: '' }
            ],
            tags: ["css", "grid", "responsive"]
        },
        {
            title: "Refactor JavaScript to Modern ES6+",
            description: "Refactor the following JavaScript code to use modern ES6+ syntax, including arrow functions, template literals, and destructuring.",
            inceptions: [
                { key: 'Code', value: '{selection}' },
                { key: 'Refactored Code', value: '' }
            ],
            tags: ["javascript", "es6", "refactoring"]
        },
        {
            title: "Write Unit Tests with Jest",
            description: "Write unit tests for the following function using Jest. Include test cases for edge cases and invalid inputs.",
            inceptions: [
                { key: 'Function Code', value: '{selection}' },
                { key: 'Test Cases', value: '' }
            ],
            tags: ["testing", "jest", "unittesting"]
        },
        {
            title: "Convert Figma Design to HTML/CSS",
            description: "Convert the given Figma design specifications into HTML and CSS code. Ensure to make the layout responsive using Flexbox or Grid.",
            inceptions: [
                { key: 'Figma Design Specs', value: '{selection}' },
                { key: 'HTML/CSS Code', value: '' }
            ],
            tags: ["figma", "html", "css", "design"]
        },
        {
            title: "Improve Web Page Performance",
            description: "Analyze the following web page's performance and suggest improvements to enhance loading speed, including reducing render-blocking resources and lazy-loading assets.",
            inceptions: [
                { key: 'Web Page Details', value: '{selection}' },
                { key: 'Performance Suggestions', value: '' }
            ],
            tags: ["performance", "optimization", "web"]
        },
        {
            title: "Convert JavaScript to TypeScript",
            description: "Convert the provided JavaScript code into TypeScript, including type annotations, interfaces, and strict type checking.",
            inceptions: [
                { key: 'JavaScript Code', value: '{selection}' },
                { key: 'TypeScript Code', value: '' }
            ],
            tags: ["typescript", "javascript", "conversion"]
        },
        {
            title: "Implement Dark Mode with Tailwind CSS",
            description: "Provide a Tailwind CSS implementation to add a dark mode toggle to the following web page layout. Include instructions for toggling between light and dark themes.",
            inceptions: [
                { key: 'Web Page Layout', value: '{selection}' },
                { key: 'Tailwind CSS Code', value: '' }
            ],
            tags: ["tailwind", "css", "darkmode"]
        }
    ];

    return (
        <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge className="gap-2">
                <SquareTerminal className="h-5 w-5" />
                Prompts
            </Badge>
            <Heading>Couple of Prompts.</Heading>
            <FramerWrapper y={0} x={200}>
                <p className="font-poppins bg-white text-xl w-full text-primary max-sm:text-lg">
                    I have wrote some prompts that you can use to get started.
                </p>
            </FramerWrapper>
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4">
                {prompts.map((prompt, index) => (
                    <PromptCard key={index} {...prompt} />
                ))}
            </div>
        </div>
    );
};

export default Prompts;