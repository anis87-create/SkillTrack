import {EllipsisVertical} from 'lucide-react'; 
const Skill = ({icon, title, level, progression, date}) => {
  return (
    <div className='px-2 py-3 rounded-lg shadow-sm'>
       <div className='flex items-start justify-between mb-6 gap-4'>
          <div className='flex items-center gap-3'>
            <img src={icon} className='w-12 h-12' alt='' />
            <div className='flex flex-col'>
               <span className='mb-2 font-semibold'>{title}</span>
               <span className='text-[12px] font-bold text-violet-700 bg-violet-100 rounded px-2 py-1'>{level}</span>
            </div>
          </div>
          <EllipsisVertical />
       </div>
       <div className='flex flex-col'>
        <span className='font-bold text-primary text-xl'>{progression}%</span>
        <span className='my-4 text-gray-400 text-[14px]'>Progression</span>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progression}%` }}></div>
        </div>
        <p className='my-4 text-[14px] text-gray-500'>{date}</p>
       </div>
    </div>
  )
}

export default Skill
