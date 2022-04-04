import React from 'react';
import Todo from '../assets/todo.png';
import ems from '../assets/ems.png';
import crud from '../assets/crud.png';
import crypt from '../assets/crypto.png';
import port from '../assets/portfolio.png';




const Projects = () => {
return (

  <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#132642]'>
     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div className='pb-8 sm:text-center'>
             <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Projects</p>
             <p className='py-4 text-xl'>Checkout it out!</p>
           </div>

      <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>    {/**ProjectContainer */}   {/** ProjectCards */}

      <div> {/**project One */}                
         <div  style={{backgroundImage:`url(${crypt})`}} 
              className='shadow-lg shadow-[#040a16] group rounded-md flex flex-col justify-center items-center mx-auto content-div sm:hover:scale-110 h-[180px] md:h-[230px] sm:h-[230px]'>
              {/**HoverEffects */}
             <div className='opacity-100 duration-500 text-black font-sans  group-hover:text-white'> 
               <span className='text-xl font-bold text-center '>
                  <p className='text-center text-3xl py-2 rounded-lg bg-zinc-300 shadow-xl group-hover:shadow-zinc-700 px-4 shadow-black'>Crypto Website</p>
                  <p className='text-sm'>React CSS CoinGeko API</p>
               </span>
               <div className='pt-3 text-center'>
                  <a href="https://github.com/JoshBiong/cryptosite">
                  <button className='border-2 p-3 mr-5 rounded-lg w-240 bg-white text-gray-600 font-bold'>Repo</button>
                  </a>
               </div>
             </div>
         </div> 
      </div>

 {/**project Two */}
      <div>                      
            <div  style={{backgroundImage:`url(${Todo})`}} 
            className='shadow-lg shadow-[#040a16] group rounded-md flex flex-col justify-center items-center mx-auto content-div sm:hover:scale-110 h-[180px] md:h-[230px] sm:h-[230px]'>
              {/**HoverEffects */}
               <div className='opacity-100 duration-500 text-black font-sans   '> 
                     <span className='text-xl font-bold text-center'>
                     <p className='text-center text-3xl py-2 px-4 bg-yellow-500 rounded-md shadow-xl group-hover:shadow-yellow-200 shadow-black '>TodoList</p>
                       <p className='text-sm'>HTML CSS Javascript </p>
                     </span>
                  <div className='pt-3 text-center'>
                      <a href=" https://joshbiong.github.io/todoList/">
                         <button className='border-2 p-3 mr-5 rounded-lg w-240 bg-white text-gray-600 font-bold'>Demo</button>
                       </a>
                       <a href="https://github.com/JoshBiong/todoList">
                         <button className='border-2 p-3 rounded-lg w-240 bg-white text-gray-600 font-bold'>Repo</button>
                       </a>                
                  </div>
              </div>
          </div> 
      </div>


      {/**project Three */}
      <div>
            <div  style={{backgroundImage:`url(${port})`}}
             className='shadow-lg shadow-[#040a16] group rounded-md flex flex-col justify-center items-center mx-auto content-div sm:hover:scale-110 h-[180px] md:h-[230px] sm:h-[230px]'>
              {/**HoverEffects */}
              <div className='opacity-100 duration-500 text-white font-sans  group-hover:text-white'> 
                  <span className='text-xl font-bold text-center'>
                    <p className='text-center text-3xl py-2  bg- shadow-xl group-hover:shadow-slate-900 px-4 shadow-black rounded-lg'>Personal Portfolio</p>
                    <p className='text-sm'>Reactjs TailwindCSS Getform</p>
                  </span>
                  <div className='pt-3 text-center'>
                    <a href="/">
                      <button className='border-2 p-3 rounded-lg w-240 bg-white text-gray-600 font-bold'>Repo</button>
                    </a>
                  </div>
              </div>
          </div> 
      </div>

      {/**project Four */}
      <div>                    
            <div  style={{backgroundImage:`url(${ems})`}} 
            className='shadow-lg shadow-[#040a16] group rounded-md flex flex-col justify-center items-center mx-auto content-div sm:hover:scale-110 h-[180px] md:h-[230px] sm:h-[230px]'>
              {/**HoverEffects */}
              <div className='opacity-100 duration-500 text-black font-sans '> 
                  <span className='text-xl font-bold text-center'>
                    <p className='text-center text-3xl py-2  bg-white shadow-xl group-hover:shadow-white px-4 shadow-black rounded-lg'>BioGeCen[EMS]</p>
                    <p className='text-sm'>HTML PHP CSS Javascript MySQL</p>
                  </span>
                  <div className='pt-3 text-center'>
                    <a href="https://joshbiong.github.io/biogecenEMS/">
                      <button className='border-2 p-3 mr-5 rounded-lg w-240 bg-white text-gray-600 font-bold'>Demo</button>
                    </a>
                    <a href="https://github.com/JoshBiong/biogecenEMS">
                      <button className='border-2 p-3 rounded-lg w-240 bg-white text-gray-600 font-bold'>Repo</button>
                    </a>
                  </div>
              </div>
          </div> 
      </div>

         {/**project Five */}
      <div>                          
            <div  style={{backgroundImage:`url(${crud})`}} 
            className='shadow-lg shadow-[#040a16] group rounded-md flex flex-col justify-center items-center mx-auto content-div sm:hover:scale-110 h-[180px] md:h-[230px] sm:h-[230px]'>
              {/**HoverEffects */}
              <div className='opacity-100 duration-500 text-black font-sans '> 
                  <span className='text-xl font-bold text-center'>
                    <p className='text-center text-3xl py-2  bg-blue-300 shadow-xl
                   group-hover:shadow-white px-4 shadow-black rounded-lg'>Contact Keeper</p>
                    <p className='text-sm'>C# WinForm.Net</p>
                  </span>
                  <div className='pt-3 text-center'>
                    <a href="https://github.com/JoshBiong/biogecenEMS">
                      <button className='border-2 p-3 rounded-lg w-240 bg-white text-gray-600 font-bold'>Repo</button>
                    </a>
                  </div>
              </div>
          </div> 


      </div>
     
 



        </div>
        </div>
    </div>
  )
}

export default Projects