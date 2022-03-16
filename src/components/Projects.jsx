import React from 'react';
import ProjectCards from './ProjectCards';


const Projects = () => {
  return (

    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#132642]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
         
          <div className='pb-8 sm:text-center'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Projects</p>
            <p className='py-4 text-xl'>Checkout my recent work!</p>
          </div>
         <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <ProjectCards />
          <ProjectCards />
          <ProjectCards />
          <ProjectCards /> 
          <ProjectCards />
          <ProjectCards />  
        </div>
        </div>
    </div>
  )
}

export default Projects