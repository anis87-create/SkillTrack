

const Activity = ({ icon, description, date }) => {
  return (
    <div className='flex  items-center justify-between my-2'>
       <div className='flex items-center'>
          <img src={icon} alt='' className='mr-2 w-8 h-8'/> 
          <p className='mr-2 text-[14px]'>{description}</p>
       </div>
       <span className='text-[14px] text-gray-400'>{date}</span>
    </div>
  )
}

export default Activity
