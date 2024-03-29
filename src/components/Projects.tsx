const projects = [
  {
    name: 'Realidade Virtual',
    description: 'ReskyVR',
    imageSrc: './images/reskyvr.png',
    imageAlt: 'ReskyVR',
    href: '/#/reskyvr',
  },
  {
    name: 'Consulta de CEP',
    description: 'ConsultaCEP',
    imageSrc: './images/appConsultaCEP.png',
    imageAlt: 'ConsultaCEP',
    href: 'https://github.com/GustavoBazan/appConsultaCEP',
  },
  {
    name: 'Código desse Portfólio!',
    description: 'Portfólio',
    imageSrc: './images/portfolio.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'https://github.com/GustavoBazan/gustavobazan.github.io',
  },
]

export default function Projects() {
  return (
    <div className="bg-slate-900" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-slate-200">Projetos</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {projects.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-slate-200">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-slate-300">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
