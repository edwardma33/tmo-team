import React from 'react'
import Image from 'next/image'
import team from '@/pages/api/teamInfo'
import { FiSmartphone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'


export default function Profile({person}) {
  return (
    <main className=' text-center p-5 rounded-3xl shadow-2xl dark:shadow-md dark:shadow-magenta mb-10'>
      <h2 className=' text-5xl py-2 text-magenta'>{team[person].name}</h2>
      <h3 className=' text-2xl py-2 dark:text-white'>{team[person].role}</h3>
      <div className='relative mx-auto bg-gradient-to-b from-magenta to-white rounded-full w-40 h-40 overflow-hidden shadow-2xl'>
        <Image src={require('../public/' + team[person].name.toLowerCase() + '.png')} fill alt='Employee Memoji'/>
      </div>
      <div className=' w-full mx-auto dark:text-white'>
        <p className=' py-2 flex w-fit mx-auto align-middle gap-2'>
          <FiSmartphone className=' text-xl' /> {team[person].currentPhone}
        </p>
        <p className=' py-2 flex w-fit mx-auto align-middle gap-2'>
          <AiOutlineMail className=' text-xl' /> {team[person].email}
        </p>
      </div>
      
    </main>
  )
}