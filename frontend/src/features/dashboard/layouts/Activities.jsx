import { ArrowRight } from 'lucide-react';
import { ActivitiesData } from '../data';
import Activity from '../components/Activity';
const Activities = () => {
  return (
    <div className='p-4 shadow-sm'>
      <div className='flex justify-between'>
         <h3 className='font-semibold my-1'>Activités récentes</h3>
         <a href='#' className='text-primary text-[14px] font-semibold flex'>
            Voir tout
            <ArrowRight className='ml-1' />
         </a>
      </div> 
      {ActivitiesData.map(activity => <Activity
         key={activity.id}
         icon={activity.icon}
         description={activity.description}
         date={activity.date}
      />)} 
      
    </div>
  )
}

export default Activities
