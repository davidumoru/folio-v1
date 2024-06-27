interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Scryer',
    description: `(Work-In-Progress)--- Scryer unlocks valuable insights from web data using AI and web scraping techniques.`,
    imgSrc: '/static/images/scryer.png',
    href: 'https://github.com/davidumoru/scryer',
  },
  {
    title: 'Apex',
    description: `(Work-In-Progress)--- Apex lets you deploy your frontend applications to the web with minimal effort.`,
    imgSrc: '/static/images/apex.png',
    href: 'https://github.com/davidumoru/',
  },
  {
    title: 'Verifyr',
    description: `Coming Soon`,
    imgSrc: '',
    href: 'https://github.com/davidumoru/',
  },
  {
    title: 'FeedWell',
    description: `Coming Soon`,
    imgSrc: '',
    href: 'https://github.com/davidumoru/',
  },
]

export default projectsData
