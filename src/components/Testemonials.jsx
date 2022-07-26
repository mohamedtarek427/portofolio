import React from 'react'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill, BsWhatsapp } from 'react-icons/bs';
  import { Link } from 'react-scroll';
function testemonials() {
  return (
    <div>
    <div name='testemonials' className='align-items center justify-center py-2 bg-slate-900 md:hidden lg:hidden'>
    <ul>
    
      <li className='w-[100%] align-content center justify-between items-center duration-300 bg-blue-600 py-4 mt-3'>
        <a
          className='flex justify-center items-center w-full text-gray-300'
          href='https://www.linkedin.com/in/mohamed-tarek-09850723a/'
        >
          Linkedin <FaLinkedin size={30} />
        </a>
        </li>
        
      <li className='w-[100%] justify-between items-center duration-300  bg-[#333333] py-4 mt-3'>
        <a
          className='flex justify-center items-center w-full text-gray-300'
          href='https://github.com/mohamedtarek427'
        >
          Github <FaGithub size={30} />
        </a>
      </li>
      <li className='w-[100%] justify-between items-center duration-300 bg-red-500 py-4 mt-3'>
        <a
          className='flex justify-center items-center w-full text-gray-300'
          href='https://mail.google.com/mail/u/1/#inbox'
        >
          Email <HiOutlineMail size={30} />
        </a>
      </li>
      <li className='w-[100%] justify-between items-center duration-300 bg-pink-200 py-4 mt-3'>
        <a
          className='flex justify-center items-center w-full text-black'
          href='https://drive.google.com/file/d/1-BK8upZv4wFy_6c9Pt1IUkPCRm-gNAor/view?usp=sharing'
        >
          Resume <BsFillPersonLinesFill size={30} />
        </a>
      </li>
      <li className='w-[100%] justify-between items-center duration-300 bg-green-500 py-4 mt-3'>
      <a
        className='flex justify-center items-center w-full text-white'
        href='https://api.whatsapp.com/send/?phone=%2B201273397388&text&type=phone_number&app_absent=0'
      >
        whatsapp <BsWhatsapp size={30} />
      </a>
    </li>
    </ul>
  </div>
    </div>
  )
}

export default testemonials