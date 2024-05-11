interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Scryer',
    description: `Scryer leverages the power of Gemini, a large language model from Google AI, combined with web scraping techniques to unlock valuable insights from web data.`,
    imgSrc: '/static/images/scryer.png',
    href: 'https://github.com/davidumoru/scryer',
  },
  {
    title: 'EtherSeed',
    description: `EtherSeed is a decentralised crowdfunding platform. Project creators launch campaigns and backers browse projects and contribute crypto to receive project tokens.`,
    imgSrc: '/static/images/etherseed.png',
    href: 'https://github.com/davidumoru/EtherSeed',
  },
  {
    title: 'FeedWell',
    description: `Coming Soon`,
    imgSrc: '',
    href: '/',
  },
  {
    title: 'Apex',
    description: `Coming Soon`,
    imgSrc: '',
    href: '/',
  },
]

export default projectsData
