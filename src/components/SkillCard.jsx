import { FaHtml5, FaCss3Alt, FaReact, FaJava } from 'react-icons/fa';
import { SiJavascript, SiPython, SiTailwindcss } from 'react-icons/si';
import ProgressBar from '../components/ProgressBar'

const icons = {
  react: <FaReact className="text-6xl text-blue-400" />,
  html: <FaHtml5 className="text-6xl text-orange-600" />,
  css: <FaCss3Alt className="text-6xl text-blue-600" />,
  javascript: <SiJavascript className="text-6xl text-yellow-400" />,
  python: <SiPython className="text-6xl text-yellow-600" />,
  tailwind: <SiTailwindcss className="text-6xl text-teal-400" />,
  java: <FaJava className="text-6xl text-red-600" />,
};

export default function SkillCard({ skillName, progress }) {
  return(
    <div className="flex flex-col items-center rounded-md border-2 border-purple-500 w-[12vh] h-[15vh] p-3">
      {icons[skillName.toLowerCase()] || null}
      <h2 className="mt-2 text-xl capitalize">{skillName}</h2>
      <ProgressBar progress={progress} />
    </div>
  )
}