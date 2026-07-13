import { CalendarDays } from 'lucide-react'

const Target = ({ name, date }) => {
  return (
     <div className='flex justify-between items-center my-2 p-2 rounded-lg hover:bg-slate-50 transition'>
        <div className='flex items-center gap-3'>
            <input 
              type='radio' 
              name='target' 
              className='h-6 w-6 cursor-pointer accent-primary border border-solid border-primary focus:ring-2 focus:ring-primary/40 focus:ring-offset-0' 
            />
            <label className='text-[14px] font-medium text-slate-700 cursor-pointer'>{name}</label>
        </div>
        <div className='flex items-center gap-2 text-gray-400'>
            <CalendarDays className='h-5 w-5'/>
            <label className='text-[14px]'>{date}</label>
        </div>
     </div>
  )
}

export default Target
