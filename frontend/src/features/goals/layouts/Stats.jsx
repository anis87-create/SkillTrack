import React from 'react'
import { stats } from '../data/stats';
import Stat from '../components/Stat';
const Stats = () => {
  return (
    <div className='flex md:grid md:grid-cols-4 md:gap-4'>
        {stats.map(stat => <Stat
           key={stat.id}
           count={stat.count}
           title={stat.title}
           icon={stat.icon}
        />)}
    </div>
  )
}

export default Stats
