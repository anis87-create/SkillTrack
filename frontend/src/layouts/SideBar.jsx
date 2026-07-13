
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { ChartNoAxesColumn, ClipboardCheck, CodeXml, Home, Settings, Target } from "lucide-react";
import cup from '../assets/cup.png';
import SideBarItem from "../components/SideBarItem";
const SideBarItems = [
  { label: 'Accueil', icon: Home, href: '' },
  { label: 'Compétences', icon: CodeXml, href: 'skills' },
  { label: 'Objectifs', icon: Target, href: 'goals' },
  { label: 'Progrès', icon: ChartNoAxesColumn, href: 'progress' },
  { label: 'Tâches', icon: ClipboardCheck, href: 'tasks' },
  { label: 'Paramètres', icon: Settings, href: 'settings' }
];
const SideBar = ({user}) => {
  return (
    <div className="p-4 overflow-x-hidden">
      <h2 className='flex items-center font-bold p-4'>
        <FontAwesomeIcon
          icon={faRocket}
          className="text-primary"
          size="2x"
        />
      <span className='ml-1 text-[20px]'>SkillTrack</span></h2>
      <div className="mt-15 flex flex-col flex-1 overflow-x-hidden">
        {SideBarItems.map((item, index) => (
          <SideBarItem 
            key={item.label} 
            href={item.href} 
            active={index === 0}
          >
            <item.icon className="mr-4 rounded-lg text-primary" />
            <span className="text-[15px]">{item.label}</span>
          </SideBarItem>
        ))}

        <div className="flex flex-col justify-center items-center border border-gray-50  mt-10 bg-violet-50 rounded-lg min-h-64">
            <div className="flex items-center justify-center pl-8 w-full"><img src={cup} alt=""  /></div>
            <p className="font-bold mb-2 text-[14px]">Continue comme ça!</p>
            <p className="text-center text-[14px]">Tu es sur la bonne voie <br /> pour atteindre tes objectifs.</p>
        </div>
      </div>

    </div>
  )
}

export default SideBar;
