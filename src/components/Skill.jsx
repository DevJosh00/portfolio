import React from 'react'
import Logo from '../assets/html.png';
import Reactlogo from '../assets/react.png';
import CSS from '../assets/css.png';
import MYSQL from '../assets/MYSQL.png';
import TailwindCss from '../assets/tcss.png';
import Github from '../assets/git.png';
import Js from '../assets/jslogo.png';
import Csharp from '../assets/CS.png';
import VST from '../assets/vstlogo.png';


const Skill = () => {
    return (
        // ContainerOfAll

        <div name="skill" className='bg-[#132642] text-gray-300 w-full h-[100%] '>
            {/** SkillsContainer */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=' sm:text-center mt-15 py-14'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Language I speak </p>
                </div>

                {/**SkillsLogoArea */}

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-2 items-center'>

                    <div className=' shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-1000 sm:hover:scale-900 duration-500 h-48 p-6'>
                        <img className='w-20 mx-auto items-center py-3' src={Logo} alt="Html logo " ></img>
                        <p className='py-4'>HTML</p>
                    </div>

                    <div className=' shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500 h-48 p-6'>
                        <img className='w-20 mx-auto items-center' src={CSS} alt="CSS logo" ></img>
                        <p className='py-4'>CSS</p>
                    </div>
                    <div className=' shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500 h-48 p-6'>
                        <img className='w-20 mx-auto items-center' src={Js} alt="Javascript logo" ></img>
                        <p className='py-4'>Javascript</p>
                    </div>
                    <div className=' shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500 h-48 p-6'>
                        <img className='w-20 mx-auto items-center' src={Csharp} alt="C# logo" ></img>
                        <p className='py-4'>C #</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500 h-48 p-6 '>
                        <img className='w-20 mx-auto ' src={Reactlogo} alt="React logo"></img>
                        <p className='py-4'>Reactjs</p>
                    </div>

                    <div className=' shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500 h-48 p-6'>
                        <img className='w-20 mx-auto items-center' src={TailwindCss} alt="Tailwindcss logo" ></img>
                        <p className='py-4'>TailwindCss</p>
                    </div>

                </div>

                <div className=' sm:text-center mt-10 py-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600'> Tools </p>

                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-2 items-center'>

                    <div className='shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500 h-36 p-4'>
                        <img className='w-20  mx-auto items-center' src={Github} alt="MySQL logo" ></img>
                        <p className='py-4 '>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500 h-36 items-center justify-center p-4'>
                        <img className='w-20 mx-auto items-center' src={VST} alt="Visual Studio logo" ></img>
                        <p className='py-4 '>Visual Studio</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:shadow-cyan-500/50 hover:scale-90 sm:hover:scale-110 duration-500 h-36 p-4'>
                        <img className='w-20 mx-auto items-center' src={MYSQL} alt="MySQL logo" ></img>
                        <p className='py-4 '>MySQL</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Skill







