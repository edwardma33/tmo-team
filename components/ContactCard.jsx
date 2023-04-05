import tmoContacts from '@/pages/api/tmoContact'
import React from 'react'

import { AiFillPhone } from 'react-icons/ai'

function ContactCard({index}) {
  return (
    <main className=' text-center p-5 rounded-3xl shadow-2xl mb-10'>
      <h2 className=' text-5xl py-2 text-magenta'>{tmoContacts[index].name}</h2>
      <h3 className=' text-2xl py-2 text-gray-dark'>{tmoContacts[index].role}</h3>
      <div className=' w-full flex justify-center gap-2 items-center text-gray-dark'>
        <AiFillPhone className='text-2xl' />
        <p>{tmoContacts[index].tele}</p>
      </div>
    </main>
  )
}

export default ContactCard