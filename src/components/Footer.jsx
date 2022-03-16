import React from 'react'
import Reactlogo from '../assets/react.png';
import Gith from '../assets/git.png'
import Facebook from '../assets/fb.png'
import Gmail from '../assets/gmailC.png'
import LinkedIn from '../assets/linked.png'
import Get from '../assets/getform.png';
import TailwindCss from '../assets/tcss.png';

const Footer = () => {
  return (
    <div className='bg-[#132642] w-full h-full'>
        <div className='max-w-[1000px] flex flex-col justify-center items-center p-4 mx-auto'>
         
           <div className='sm:text-center'>
                <p className='text-xl font-bold text-gray-300 inline border-b-4 py-1 border-orange-600'>Powered By:</p>
           </div>

   {/**PoweredBy */}       
         <div className='w-full mx-auto grid grid-cols-3 sm:grid-cols-3 gap-8 text-center p-8'>               
                   <div className='w-30 py-4'>
                        <img className='w-20 mx-auto ' src={Reactlogo} alt="React icon"></img>                       
                    </div>
                     <div className='w-30 py-4'>
                        <img className='w-20 mx-auto items-center' src={TailwindCss} alt="Tcss icon" ></img>                        
                    </div>
                     <div className='w-30 py-4'>
                        <img className='w-20 mx-auto ' src={Get} alt="React icon"></img>                       
                    </div>
         </div>

         {/**SocialAcountIcons */}  
         <div className=' sm:hidden'>
             <p className='text-lg text-white'>Reach Me Out Here </p>
         </div>

         <div className='w-full grid grid-cols-2 text-center py-8 items-center sm:hidden'>               
                   
                   <a href="https://github.com/JoshBiong" className='w-30 py-4 hover:scale-90 hover:shadow-lg group hover:shadow-cyan-500/50 duration-500'>
                   <img className='w-20 mx-auto group-hover:scale-125 duration-500 ' src={Gith} alt="React icon"></img> 
                   </a>
                   <a href="https://www.facebook.com/profile.php?id=100077361020459" className='w-30 py-4 hover:scale-90 group hover:shadow-lg hover:shadow-cyan-500/50 duration-500'>
                   <img className='w-20 mx-auto group-hover:scale-125 duration-500' src={Facebook} alt="Tcss icon" ></img>  
                   </a>
                   <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLGNVzfBkXHlgBphLNsRcxbCqWRlSwCKJZFxNmQbvmmBhtsQRNKDDSMsblDfnpTphCZVB" className='w-30 py-4 group hover:scale-90 hover:shadow-lg hover:shadow-cyan-500/50 duration-500'>
                   <img className='w-20 mx-auto group-hover:scale-125 duration-500' src={Gmail} alt="React icon"></img>
                   </a>
                   <a href="https://www.linkedin.com/in/joshua-biong-395180190/" className='w-30 py-4 group hover:scale-90 hover:shadow-lg hover:shadow-cyan-500/50 duration-500'>
                   <img className='w-20 mx-auto group-hover:scale-125 duration-500' src={LinkedIn} alt="React icon"></img>     
                   </a>   

                                                               
         </div>
        </div>
   </div>
  )
}

export default Footer