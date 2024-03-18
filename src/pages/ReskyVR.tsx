import Spline from '@splinetool/react-spline';

const ComputerIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 mt-1">
            <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
        </svg>
    );
  };
  
  const MobileIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 -ml-1 mt-1">
        <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
        <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
      </svg>  
    );
  };
  
  const WebIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 -ml-1 mt-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    
   
    );
  };
  
  const features = [
    {
      name: 'App Mobile:',
      description: 'Acesse um ambiente de trabalho em realidade virtual por meio do seu celular.',
      icon: MobileIcon,
    },
    {
      name: 'Múltiplas Telas:',
      description: 'Espelhamento da tela do computador permitindo que os usuários tenham a sensação de utilizar várias telas ao mesmo tempo.',
      icon: ComputerIcon,
    },
    {
      name: 'Customizável:',
      description:
        'É possível alterar a aparência visual, organizar os monitores virtuais de forma conveniente e selecionar temas ou ambientes para criar uma experiência de trabalho personalizada..',
      icon: WebIcon,
    },
  ]

  
  export default function ReskyVR() {
    return (
      <>
        <div id='home' className='flex flex-col w-screen min-h-screen bg-slate-900 select-none overflow-hidden'>

          <img src="./images/starry-night-sky.png" className='absolute h-3/4 z-0 opacity-90 animate-pulse' />
          <img src="./images/light.svg" className='absolute z-0 left-1/4 top-0 opacity-40' />

          <div className=' h-screen pt-16 pb-24 justify-center flex flex-col'>

            <h1 className='text-slate-200 text-7xl mb-[25%] lg:text-9xl font-display z-20 self-center'>ReskyVR</h1>

            <Spline scene="https://prod.spline.design/qkBi1Y0r0v1QDm1r/scene.splinecode" className='absolute hidden lg:flex items-center justify-center lg:z-10 top-[10%]' />

            <div className='absolute flex flex-col bottom-16 self-center z-40'>
              <a href="/reskyvr#funcionalidades" className='lg:animate-float'>
                <h2 className='text-slate-300 display-interface text-xl -ml-2 -mb-2'>Ver Mais</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-14 h-14 text-slate-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
            </div>

          </div>
        </div>

        <div className="overflow-hidden bg-slate-800 py-24 sm:py-32" id='funcionalidades'>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-blue-500">ReskyVR</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Funcionalidades</p>
                  <p className="mt-6 text-lg leading-8 text-slate-300">
                  A ReskyVR é um aplicativo que utiliza a realidade virtual para aumentear sua produtividade.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-300 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="font-semibold text-slate-100 flex flex-row">
                          <feature.icon aria-hidden="true" /> 
                          {feature.name}
                        </dt>
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div>
                <video
                  src="./videos/reskyvr.mp4"
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                  width={2432}
                  height={1442}
                  autoPlay
                  loop
                />
                <p className='text-slate-100 flex justify-center lg:ml-[50%]'>Acesse o ( <a className='text-blue-400' href="https://github.com/GustavoBazan/reskyvr-mobile">Código do Projeto</a> )</p>
              </div>
              
            </div>
          </div>
        </div>
      </>
    )
  }
  