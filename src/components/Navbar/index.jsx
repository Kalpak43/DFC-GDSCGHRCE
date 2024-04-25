import React from 'react'
import Logo from '../Logo'


export default function Navbar() {
  return (
    <div className='py-4 px-8 flex flex-wrap justify-center md:justify-between items-center border-b-2 border-[var(--txt-clr)] mb-2'>
      <Logo />
      <div className='md:flex gap-x-8 hidden'> 
        <a href='https://gdscghrce.in/' className='text-lg font-bold'>Home</a>
        <a href='https://gdscghrce.in/#/about' className='text-lg font-bold'>About</a>
        <a href='https://gdscghrce.in/#/team' className='text-lg font-bold'>Team</a>
        <a href='https://gdscghrce.in/#/events' className='text-lg font-bold'>Events</a>
        <a href='https://gdscghrce.in/#/contact-us' className='text-lg font-bold'>Contact Us</a>
      </div>
    </div>
  )
}
