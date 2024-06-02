interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Scryer',
    description: `Scryer unlocks valuable insights from web data using AI and web scraping techniques.`,
    imgSrc: '/static/images/scryer.png',
    href: 'https://github.com/davidumoru/scryer',
  },
  {
    title: 'Apex',
    description: `Apex lets you deploy your frontend applications to the web with minimal effort.`,
    imgSrc: '/static/images/apex.png',
    href: 'https://github.com/davidumoru/EtherSeed',
  },
  {
    title: 'EtherSeed',
    description: `EtherSeed allows users launch project campaigns and crowdfunding using crypto.`,
    imgSrc: '/static/images/etherseed.png',
    href: 'https://github.com/davidumoru/EtherSeed',
  },
  {
    title: 'FeedWell',
    description: `Coming Soon`,
    imgSrc: '/static/images/feedwell.png',
    href: 'https://github.com/davidumoru/feedwell',
  },
]

export default projectsData
