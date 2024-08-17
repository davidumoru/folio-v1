import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const fullstackProjects = projectsData.filter((project) => project.category === 'Fullstack')
  const backendProjects = projectsData.filter((project) => project.category === 'Backend')
  const cliProjects = projectsData.filter((project) => project.category === 'CLI')

  const renderProjects = (projects, showImages) => {
    return projects.map((d) => (
      <Card
        key={d.title}
        title={d.title}
        description={d.description}
        imgSrc={showImages ? d.imgSrc : undefined}
        href={d.href}
      />
    ))
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Some projects I've worked on
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold leading-9 tracking-tight text-primary-500 sm:text-3xl sm:leading-10 md:text-2xl md:leading-14">
                Fullstack Projects:
              </h2>
              <div className="-m-4 flex flex-wrap">{renderProjects(fullstackProjects, true)}</div>
            </div>
            <div>
              <h2 className="text-2xl font-bold leading-9 tracking-tight text-primary-500 sm:text-3xl sm:leading-10 md:text-2xl md:leading-14">
                Backend Projects:
              </h2>
              <div className="-m-4 flex flex-wrap">{renderProjects(backendProjects, true)}</div>
            </div>
            <div>
              <h2 className="text-2xl font-bold leading-9 tracking-tight text-primary-500 sm:text-3xl sm:leading-10 md:text-2xl md:leading-14">
                CLI Projects:
              </h2>
              <div className="-m-4 flex flex-wrap">{renderProjects(cliProjects, false)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
