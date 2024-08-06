import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions , MdOutlineWatchLater } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
function Sidebar() {


  const mainLinks=[
    {
      icon: <IoMdHome className='text-xl'/>,
      name: 'Home'

    },
    {
      icon: <SiYoutubeshorts className='text-xl' />,
      name: 'Shorts'

    },
    {
      icon: <MdOutlineSubscriptions className='text-xl'/>,
      name: 'Subscriptions'

    },
    
  ];

  const otherLinks=[
    {
      icon:<FaHistory className='text-xl' />,
      name: 'History'
    },
    {
      icon:<MdOutlineWatchLater className='text-xl' />,
      name: 'Watch Later'
    },

  ]
  return (
    <div className='w-2/12 bg-zinc-900 py-3 pr-4 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b border-gray-700'>
        {mainLinks.map(
          ({icon,name}) =>{
            return(
              <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 ${name ==="Home" ? "bg-zinc-700" : " "} rounded-xl`}>
                <a href="#" className='flex items-center gap-5 '>
                {icon}
                <span className='text-sm tracking-wider '>{name}</span>
                </a>
              </li>
            )
          }
        )}

      </ul>
      <ul className='flex flex-col border-b-1 border-gray-800'>
        {otherLinks.map(
          ({icon,name}) =>{
            return(
              <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 ${name ==="Home" ? "bg-zinc-700" : " "}`}>
                <a href="#" className='flex items-center gap-5 '>
                {icon}
                <span className='text-sm tracking-wider '>{name}</span>
                </a>
              </li>
            )
          }
        )}

      </ul>

    
    </div>
  )
}

export default Sidebar
