import { ArrowRight } from 'lucide-react';
import { tableData } from '../../goals/data/tableData';
import Target from '../components/Target';
import { Link } from 'react-router-dom';
const Targets = ({targets}) => {
  return (
    <div className='p-4 shadow-sm'>
      <div className='flex justify-between'>  
        <h3 className='font-semibold'>Objectifs du moment </h3>
        <Link to='/goals' className='text-primary text-[14px] font-semibold flex'>
                Voir tout
                <ArrowRight className='ml-1' />
        </Link>
      </div>
      <div className='flex flex-col p-2'>
         {targets?.slice(0, 3).map(target => (
            <Target 
               key={target.id}
               name={target.title}
               date={target.date}
            />
         ))}
         
      </div>
    </div>
  )
}

export default Targets
