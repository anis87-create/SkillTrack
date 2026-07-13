import Skill from '../components/Skill';
import { SkillsData } from '../data';
const Skills = () => {
  return (
    <div className='my-4 mx-0'>
       <h3 className='font-semibold text-xl leading-7 mb-4'>Mes compétences</h3>
       <div className='flex flex-col md:grid md:grid-cols-2 md:gap-2  lg:grid-cols-4 lg:gap-8'>
       {SkillsData.map(skill => <Skill 
          key={skill.id} 
          icon={skill.icon} 
          title={skill.title}
          level={skill.level}
          progression={skill.progression}
          date={skill.date}
          />)}
       </div>   
    </div>
  )
}

export default Skills
