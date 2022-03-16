import React from 'react'
import Proj from '../assets/prjct.jpg';

const ProjectCards = () => {
  return (
    <div>

{/**ProjectContainer */}


{/** ProjectCards */}
            <div style={{backgroundImage:`url(${Proj})`}} className='shadow-lg shadow-[#040a16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div hover:scale-95 sm:hover:scale-110 h-[180px] md:h-[230px] sm:h-[230px]'>
            {/**HoverEffects */}
            <div className='opacity-0 group-hover:opacity-100 group-hover:scale-110 duration-500'> 
                <span className='text-xl font-bold'>
                <p className='text-center text-2xl py-2'> Basic TodoList</p>
                <p className='text-sm'>[ Html, CSS , VanillaJs ]</p>
                </span>
                <div className='pt-3 text-center'>
                  <a href="https://joshbiong.github.io/todoList/">
                    <button className='border-2 p-3 rounded-lg w-240 bg-white text-gray-600 font-bold'>Demo</button>
                  </a>
                </div>
            </div>
            </div>
            
        



    </div>
  )
}

export default ProjectCards