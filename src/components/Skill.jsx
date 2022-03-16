import React from 'react'
import Logo from '../assets/html.png';
import Reactlogo from '../assets/react.png';
import CSS from '../assets/css.png';
import MYSQL from '../assets/MYSQL.png';
import TailwindCss from '../assets/tcss.png';
import Github from '../assets/git.png';


const Skill = () => {
  return (
    // ContainerOfAll
    
    <div name="skill" className='bg-[#132642] text-gray-300 w-full h-screen '>
        {/** SkillsContainer */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=' sm:text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Language I speak </p>
                <p className="text-xl py-4"> Technolgies I experienced with //:</p>        
            </div>

{/**SkillsLogoArea */}

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-2 items-center'>
           
                    <div className='shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500 '>
                        <img className='w-20 mx-auto ' src={Reactlogo} alt="React icon"></img>
                        <p className='py-4'>Reactjs</p>
                    </div>

                    <div className=' shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto items-center' src={TailwindCss} alt="Tcss icon" ></img>
                        <p className='py-4'>TailwindCss</p>
                    </div>

                    <div className=' shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto items-center py-3' src={Logo} alt="Html icon " ></img>
                        <p className='py-4'>HTML</p>
                    </div>

                    <div className=' shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto items-center' src={CSS} alt="CSS icon" ></img>
                        <p className='py-4'>CSS</p>
                    </div>

                     <div className='shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500'>
                        <img className='w-20  mx-auto items-center' src={Github} alt="MySQL icon" ></img>
                        <p className='py-4 '>Github</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto items-center' src={MYSQL} alt="MySQL icon" ></img>
                        <p className='py-4 '>MySQL</p>
                    </div>

                    

          </div>
        </div>
    </div>
  )
}

export default Skill







