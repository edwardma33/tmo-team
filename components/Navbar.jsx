import React, { useState } from 'react'
import Link from 'next/link'
import useWindow from '@/hooks/useWindow'
import { FaBars } from 'react-icons/fa'

export default function Navbar({currentPage}) {
  const linkStyle = "text-white text-md font-poppins bg-magenta py-1 px-2 ml-4 rounded-md"
  const activeLink = linkStyle + " py-2 px-3"
  const linkStyleSmall = " text-lg "
  const activeLinkSmall = linkStyleSmall + " bg-magenta-dark rounded-full"
  const shownDropdown = "grid text-center pt-4"

  const [dropownStyle, setDropdownStyle] = useState('custom-class')

  const handleDropDown = () => {
    dropownStyle == shownDropdown ? setDropdownStyle('custom-class') : setDropdownStyle(shownDropdown)
  }
  if (useWindow() > 800) {
    return (
      <nav className=' flex justify-between py-10 mb-12'>
        <Link className=' text-md font-poppins' href="/">T-MOBILE ON HOUK</Link>
        <ul className=' flex items-center'>
          <li>
            <Link className={currentPage != 0 ? linkStyle : activeLink}  href="/">Our Team</Link>
          </li>
          <li>
            <Link className={currentPage != 1 ? linkStyle : activeLink} href="Faqs">FAQS</Link>
          </li>
          <li>
            <Link className={currentPage != 2 ? linkStyle : activeLink} href="Contact">contacts</Link>
          </li>
          <li>
            <Link className={linkStyle} href="https://www.t-mobile.com/" target='_blank'>T-Mobile Website</Link>
          </li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className=' text-white py-6 mb-12 bg-magenta border-b-2 rounded-lg'>
          <div className='flex justify-between px-4 items-center'>
          <Link className=' text-2xl font-poppins ' href="/">T-MOBILE ON HOUK</Link>
          <button onClick={() => {handleDropDown()}}>
            <FaBars className='text-2xl' />
          </button>
          </div>
          
          <div className={dropownStyle}>
            <Link className={currentPage != 0 ? linkStyleSmall : activeLinkSmall} href={'/'}>Our Team</Link>
            <Link className={currentPage != 1 ? linkStyleSmall : activeLinkSmall} href={'Faqs'}>FAQs</Link>
            <Link className={currentPage != 2 ? linkStyleSmall : activeLinkSmall} href={'Contact'}>Contacts</Link>
            <Link href={'https://www.t-mobile.com/'} target='_blank'>Official Website</Link>
          </div>
      </nav>
    ) 
  }
  
  
}

