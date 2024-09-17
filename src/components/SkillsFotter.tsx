import { Technology } from "@/app/skills/page";
import Image from "next/image";
import React from "react";


interface MyComponentProps{
    items:Array<Technology>
}

const SkillsFooter:React.FC<MyComponentProps> = ({items}) => {
  return (
    <>
      { items && items.map((val, indx) => {
        return (
          <div className="p-1 bg-white border-2 border-gray-500 rounded-lg overflow-hidden flex flex-col items-center justify-between" key={indx}>
            <Image src={val?.img} alt={val?.alt} className="w-20 h-20" />
            <span className="text-xs">{val?.alt}</span>
          </div>
        );
      })}
    </>
  );
};

export default SkillsFooter;
