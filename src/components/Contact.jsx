import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#132642] flex justify-center items-center w-full h-screen p-4 '>
      <form method='POST' action='https://getform.io/f/17bc0f68-a186-42c9-8007-068c819b61b8' className='max-w-[600px] w-full flex flex-col '>
      
       <div className='pb-6 sm:text-center'>
          <p className='text-4xl inline font-bold border-b-4 border-orange-600 text-gray-300'>Contact</p>
          <p className='text-xl text-gray-300 py-4'>P.i.n.g. .m.e. . ! .</p>
       </div>
       <input className='font-semibold bg-[#ccd6f6] p-2' type="text" name="Name" placeholder='Name' />
       <input className='font-semibold bg-[#ccd6f6] p-2  my-4' type="email" name="Email" placeholder='Email' />
       <textarea className='p-2 font-bold bg-[#ccd6f6]' rows="10" name='message' placeholder='Mesasage'></textarea>
       <button className='text-white font-bold border-2 my-8 p-3 px-4  hover:bg-orange-600 hover:border-orange-600 mx-auto flex items-center hover:scale-110 duration-500 rounded-lg '>Let's Collaborate</button>
      </form>

    </div>
  )
}

export default Contact