import React from "react";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center text-white p-10 gap-10">
      <SkillCard skillName={"Html"} progress={85} className="hover:"/>
      <SkillCard skillName={"Css"} progress={85}/>
      <SkillCard skillName={"React"} progress={60}/>
      <SkillCard skillName={"Tailwind"} progress={70}/>
      <SkillCard skillName={"Javascript"} progress={50}/>
      <SkillCard skillName={"Python"} progress={40}/>
      <SkillCard skillName={"java"} progress={30}/>
    </div>
  );
}
