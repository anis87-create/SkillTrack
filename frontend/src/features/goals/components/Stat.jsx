import React from 'react'

const Stat = ({ count, icon, title }) => {

  return (
    <div className='p-3 flex items-center shadow-[0px_1px_4px_rgba(0,0,0,0.16)] rounded'>
        <img src={icon} alt='' className='w-10 h-10' />
        <div className='flex flex-col ml-4'>
            <span className='text-xl font-bold'>{count}</span>
            <p className='text-[14px]'>{title}</p>
        </div>
    </div>
  )
}

export default Stat
