interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  category: 'Fullstack' | 'Backend' | 'CLI'
}

const projectsData: Project[] = [
  {
    title: 'Scryer',
    description: `(Work-In-Progress)--- Scryer unlocks valuable insights from web data using AI and web scraping techniques.`,
    imgSrc: '/static/images/scryer.png',
    href: 'https://github.com/davidumoru/scryer',
    category: 'Fullstack',
  },
  {
    title: 'Apex',
    description: `(Work-In-Progress)--- Apex lets you deploy your frontend applications to the web with minimal effort.`,
    imgSrc: '/static/images/apex.png',
    href: 'https://github.com/davidumoru/',
    category: 'Fullstack',
  },
  {
    title: 'Verifyr',
    description: `Coming Soon`,
    imgSrc: '/static/images/verifyr.png',
    href: 'https://github.com/davidumoru/verifyr',
    category: 'Backend',
  },
  {
    title: 'FeedWell',
    description: `(Work-In-Progress)--- RSS feed aggregator that allows users to subscribe to multiple blogs and receive updates in one place.`,
    imgSrc: '/static/images/feedwell.png',
    href: 'https://github.com/davidumoru/feedwell',
    category: 'Backend',
  },
  {
    title: 'Git Helper',
    description: `Command-line tool that simplifies common Git commands`,
    imgSrc: '',
    href: 'https://github.com/davidumoru/git-helper',
    category: 'CLI',
  },
  {
    title: 'Locksmith',
    description: `Command-line tool for generating, managing, and securely encrypting passwords.`,
    imgSrc: '',
    href: 'https://github.com/davidumoru/locksmith',
    category: 'CLI',
  },
  {
    title: 'README Generator',
    description: `Command-line tool that generates a well-structured README file for your projects.`,
    imgSrc: '',
    href: 'https://github.com/davidumoru/readme-generator',
    category: 'CLI',
  },
]

export default projectsData
