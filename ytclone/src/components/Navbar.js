import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
function Navbar() {
  return (
    <div className='flex justify-between px-3 h-8 margin-1 items-center py-5 bg-zinc-900 opacity-95 sticky'>
      <div className='flex gap-8 items-center text-2x1 text-white'>
        <div>
          <RxHamburgerMenu />
        </div>
        <div className='flex gap-2 items-center justify-center'>
          <FaYoutube className='text-3x1 h-5 w-5 text-red-700' />
          <span className='text-x1  '>Youtube</span>
        </div>
        </div>
        <div className='flex items-center justify-center gap-5 text-white'>
          <form>
            <div>
              <div className='flex bg-zinc-900 items-center h-6 px-2 pr-0 rounded-3xl'>
                <div className='flex gap-5 items-center '>
                  <input className="w-96px bg-zinc-900 focus:outline-none border-none items-center  " type="text" placeholder="Search" />
                  <div >
                    <button className='h-6 px-1 pr-2 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                      <CiSearch className=' flex text-xl' /></button>
                  </div>
                </div>
              </div>
          
            </div>
          
          </form>
          <div className=' flex p-1.5 bg-zinc-900 rounded-full'>
              <FaMicrophone />
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 text-white">
          
          <div className='flex gap-5 items-center text-xl'>
            <RiVideoAddLine />
          </div>
          <div className='relative'>
            <IoMdNotificationsOutline />
            <span className='absolute bottom-2 left-2 text-xs bg-red-900 rounded-full px-1'>9+</span>
          </div>
          <div>
            <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg " alt="profile image" className='w-7 h-7 rounded-full'/>
          </div>
        </div>
        </div>
   
  )
}

export default Navbar
