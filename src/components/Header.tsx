import Spline from '@splinetool/react-spline';

export default function Header() {
    return (
        <div id='home' className='flex flex-col w-screen min-h-screen bg-slate-900 select-none overflow-hidden'>

            <img src="./images/starry-night-sky.png" className='absolute h-3/4 z-0 opacity-90 animate-pulse' />
            <img src="./images/light.svg" className='absolute z-0 left-1/4 top-0 opacity-40' />

            <div className=' h-screen pt-16 pb-24 ml-16 lg:ml-[3%] lg:mr-64 justify-center flex flex-col'>

                <h1 className='text-slate-200 text-5xl lg:ml-24 lg:text-9xl font-display z-20'>I'm Gustavo,</h1>
                <h1 className='text-slate-200 text-3xl lg:ml-24 lg:text-7xl font-display z-20'>Web Developer.</h1>

                <div className='h-20 rounded-3xl border-2 w-52 mt-5 lg:ml-24 text-slate-300/90 font-interface text-2xl justify-center items-center flex text-center z-20'>

                


                    <a className='flex flex-row' href="https://www.linkedin.com/in/gustavo-de-almeida-bazan">
                    Me Contate

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                    </a>
                    

                </div>

                <Spline scene="https://prod.spline.design/89agnwdwMdan7EHo/scene.splinecode" className='absolute flex right-[50%] mt-10 lg:left-[50%] items-center lg:z-30 animate-float' />

                <div className='absolute flex flex-col bottom-16 mb-8 lg:mb-0 lg:ml-48  mr-16 lg:mr-0 self-center'>
                <a href="#projects">
                    <h2 className='text-slate-300 display-interface text-xl -ml-2 -mb-2'>Projects</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-14 h-14 text-slate-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    </a>
                </div>

            </div>
        </div>
    )
}