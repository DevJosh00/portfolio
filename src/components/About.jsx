import React from 'react'

const About = () => {
  return (
        <div name="about" className="w-full h-screen bg-[#132642] text-gray-300">
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                       <p className='text-4xl font-bold text-gray300 inline border-b-4 border-orange-600' >About</p> 
                    </div>
                    <div></div>  
               </div>
               <div className='mx-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-4 '>
                   <div>
                      <p className='sm:text-right text-3xl font-bold  lg:ml-28' >Hello World! Im please to meet you!  </p>
                   </div>     
                   <div>
                       <p className='lg:mr-28'>
                        I'm Joshua Biong from the city of Davao. 
                        Let me help you to bring your ideas to life. Powered by the language I speak and let's turn your requirements into Website or Software.
                       </p>
                   </div>            
               </div>
              
            </div>               
        </div>
     
      
 
  )
}

export default About