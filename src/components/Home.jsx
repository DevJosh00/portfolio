import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <>
    <div name="home" className="w-full h-screen bg-[#132642] grid-cols-2 ">
      {/** CONTAINER*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col  justify-center h-full lg:ml-48">
        <p className="text-xl text-[#f8641f]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl text-[#ddebff] font-extrabold" >Joshua Biong</h1>
        <h2 className="text-3xl sm:text-6xl text-[#a5a5a5] font-semibold " >I'm a Self-taugh Software Developer.</h2>
        <p className="text-[#a5a5a5] max-w-[600px] py-8">
         Based in Davao City
          
        
        </p> 
        
        <div>
            <button type='button' className=" text-white group font-bold border-2 px-2 py-1 items-center flex hover:bg-orange-700 hover:border-orange-700 hover:scale-110 duration-300 ">
            <Link to="projects" smooth={true} duration={500} >Projects</Link>
                <span className=" group-hover:rotate-90 duration-300"> 
                 <HiArrowNarrowRight className="ml-3" />
                </span>
            </button>

        
           

          
            

        </div>
      </div>
    </div>
   
    
    </>
  );
};

export default Home;
