import React, { useState } from 'react'
import Link from 'next/link'
import useWindow from '@/hooks/useWindow'
import { FaBars } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { useRouter } from 'next/router'

export default function Navbar() {
  const path = useRouter().pathname
  const linkStyle = "text-white text-md font-poppins bg-magenta py-1 px-2 ml-4 rounded-md"
  const activeLink = linkStyle + " py-2 px-3"
  const linkStyleSmall = " text-lg dark:text-white"
  const activeLinkSmall = linkStyleSmall + " bg-magenta-dark rounded-full"
  const shownDropdown = "grid text-center pt-4"

  const [dropownStyle, setDropdownStyle] = useState('custom-class')

  const handleDropDown = () => {
    dropownStyle == shownDropdown ? setDropdownStyle('custom-class') : setDropdownStyle(shownDropdown)
  }
  if (useWindow() > 800) {
    return (
      <nav className=' flex justify-between py-10 mb-12'>
        <div className=' flex'>
        <Link className=' text-lg font-poppins dark:text-magenta' href="/">T-MOBILE ON HOUK</Link>
        <Link className='ml-14 flex items-center font-poppinsThin text-lg text-gray' href={'https://www.google.com/maps/place/805+N+Houk+Rd,+Delaware,+OH+43015/@40.3131594,-83.1135806,17z/data=!3m1!4b1!4m6!3m5!1s0x8838e4e4a94f55cb:0xbb0be4c5a1d0bce8!8m2!3d40.3131553!4d-83.1110057!16s%2Fg%2F11g0jx0g9r'}>
          <ImLocation />
          805 N Houk Road, Delaware, OH
        </Link>
        </div>
        <ul className=' flex items-center'>
          <li>
            <Link className={path != '/' ? linkStyle : activeLink}  href="/">Our Team</Link>
          </li>
          <li>
            <Link className={path != '/Faqs' ? linkStyle : activeLink} href="Faqs">FAQS</Link>
          </li>
          <li>
            <Link className={path != '/Contact' ? linkStyle : activeLink} href="Contact">Contacts</Link>
          </li>
          <li>
            <Link className={linkStyle} href="https://www.t-mobile.com/" target='_blank'>T-Mobile Website</Link>
          </li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className=' text-white py-6 mb-12 bg-magenta dark:bg-black  rounded-lg'>
          <div className='flex justify-between px-4 items-center'>
          <Link className=' text-2xl font-poppins' href="/">T-MOBILE ON HOUK</Link>
          <button onClick={() => {handleDropDown()}}>
            <FaBars className='text-2xl' />
          </button>
          </div>
          
          <div className={dropownStyle}>
            <Link className={path != '/' ? linkStyleSmall : activeLinkSmall} href={'/'}>Our Team</Link>
            <Link className={path != '/Faqs' ? linkStyleSmall : activeLinkSmall} href={'/Faqs'}>FAQs</Link>
            <Link className={path != '/Contact' ? linkStyleSmall : activeLinkSmall} href={'/Contact'}>Contacts</Link>
            <Link href={'https://www.t-mobile.com/'} target='_blank'>Official Website</Link>
          </div>
      </nav>
    ) 
  }
  
  
}

