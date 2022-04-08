import React, {useState} from "react";
import {FaBars , FaTimes, FaGithub, FaFacebook, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import Logo from '../assets/logooo.png';
import {Link} from 'react-scroll';

const Navbar = () => {


const [nav, setNav] = useState(false)
const handleCLick = () => setNav(!nav)


return (

   <header className="fixed w-full h-[67px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/** logo area */}
      <div>
         <Link to="home" smooth={true} duration={500} > 
            <img className='ml-10 sm:ml-6' src={Logo} alt="Logo Imge" style={{ height: '30px' }} />
         </Link>
      </div>

       {/* menu */}    
     <ul className="hidden sm:flex mr-10">
        <li className="hover:scale-125 duration-200">
            <Link to="home" smooth={true} duration={500} > </Link>
        </li> 
        <li className="hover:scale-125 duration-200"> 
            <Link to="projects" smooth={true} duration={500} >Project</Link>
        </li>  
        <li className="hover:scale-125  duration-200">
            <Link to="about" smooth={true} duration={500} >About</Link>
        </li>
        <li className="hover:scale-125  duration-200">
            <Link to="skill" smooth={true} duration={500} >Skill</Link>
         </li>
         <li className="hover:scale-125 duration-200">
           <Link to="contact" smooth={true} duration={500} >Contact</Link>
         </li>
       </ul>
     

         {/* hamburger */}
        <div onClick={handleCLick} className="sm:hidden z-10  ">
           {!nav ?  <FaBars /> : <FaTimes />}
        </div>

        {/* Mobilemenu */}
        <ul className={!nav ? "hidden" : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center  "}>
             <li className="py-4 text-3xl">
               <Link onClick={handleCLick} to="home" smooth={true} duration={500} > Home</Link>
             </li> 
             <li className="py-4 text-3xl">
               <Link onClick={handleCLick} to="projects" smooth={true} duration={500} >Project</Link>                
             </li>
             <li className="py-4 text-3xl">
               <Link onClick={handleCLick} to="about" smooth={true} duration={500} >About</Link>
             </li>
             <li className="py-4 text-3xl">
                <Link  onClick={handleCLick}to="skill" smooth={true} duration={500} >Skill</Link>
             </li>
             <li className="py-4 text-3xl">
                <Link onClick={handleCLick} to="contact" smooth={true} duration={500} >Contact</Link>
             </li>
         </ul>

     {/* SocialIcon */}
    <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
      <ul>
        <li className= "w-[160px] h-[60px] flex justify-between items-center  ml-[-100px] hover:ml-[0px] duration-500 bg-gray-700 ">
          <a href="/" className="flex justify-between items-center w-full text-gray-300 text-xl">
            Github <FaGithub size={30}/ >
          </a>
        </li> 
       <li className= "w-[170px] h-[60px] flex justify-between items-center  ml-[-110px] hover:ml-[0px] duration-500 bg-blue-600 ">
          <a href="/" className="flex justify-between items-center w-full text-gray-300 text-xl">
            Facebook <FaFacebook size={30}/ >
          </a>
       </li>
       <li className= "w-[170px] h-[60px] flex justify-between items-center  ml-[-110px] hover:ml-[0px] duration-500 bg-[#17bbad] ">
          <a href="/" className="flex justify-between items-center w-full text-gray-300 text-xl">
            Email <HiOutlineMail size={30}/ >
          </a>
       </li>  
       <li className= "w-[170px] h-[60px] flex justify-between items-center  ml-[-110px] hover:ml-[0px] duration-500 bg-blue-400 ">
          <a href="/" className="flex justify-between items-center w-full text-gray-300 text-xl">
            LinkedIn <FaLinkedin size={30}/ >
          </a>
        </li> 
      </ul>
    </div>
    </header>

  )
}


export default Navbar 