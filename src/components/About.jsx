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
                      <p className='sm:text-right text-3xl font-bold  lg:ml-28' >Hi hello eveyone im pleasing to meet you all hope you can please me too </p>
                   </div>     
                   <div>
                       <p className='lg:mr-28'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique
                        doloremque itaque veniam magni corporis rerum asperiores voluptatum
                        dolor odit debitis iste corrupti numquam commodi laborum voluptates
                        eaque, velit quo.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique
                        doloremque itaque veniam magni corporis rerum asperiores voluptatum
                        dolor odit debitis iste corrupti numquam commodi laborum voluptates
                        eaque, velit quo.
                       </p>
                   </div>            
               </div>
              
            </div>               
        </div>
     
      
 
  )
}

export default About