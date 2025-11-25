type Project = {
  name: string
  description: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type Education = {
  title: string
  description: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Valorant Stats Tracker',
    description: 'A web app to track Valorant player stats and match history, built with React, TypeScript, and integrated Riot Games API.',
    image:
      'https://trackercdn.com/cdn/tracker.gg/apps/valorant/1_livematch.png',
    id: 'project1',
  },
  {
    name: 'E-commerce Store',
    description: 'An online store with product listings, cart functionality, and checkout using Stripe API, built with Next.js and Tailwind CSS.',
    image:
      'https://magesolution.com/wp-content/uploads/2022/07/ecommerce-website-design-examples-1024x768.jpg',
    id: 'project2',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance Web Developer',
    title: 'Frontend Developer',
    start: '2022',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'GameHub Esports',
    title: 'Professional Valorant Player',
    start: '2021',
    end: 'Present',
    id: 'work2',
  },
  {
    company: 'CodeCraft Academy',
    title: 'Web Development Intern',
    start: '2020',
    end: '2021',
    id: 'work3',
  },
  {
    company: 'Freelance Graphic Designer',
    title: 'UI/UX Designer',
    start: '2019',
    end: '2021',
    id: 'work4',
  },
]

export const EDUCATION: Education[] = [
  {
    title: 'Assumption School Passi City Inc.',
    description: 'Completed my elementary education with a strong foundation in math and science.',
    uid: 'edu-1',
  },
  {
    title: 'Assumption School Passi City Inc.',
    description: 'High school education focusing on STEM courses, participated in coding clubs and eSports competitions.',
    uid: 'edu-2',
  },
  {
    title: 'Central Philippine University',
    description: 'Pursued a degree in Computer Science, specializing in web development, front-end frameworks, and UX/UI design.',
    uid: 'edu-3',
  },
]


export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Vaskel01',
  },
  {
    label: 'Facebook',
    link: 'https://facebook.com/palmares.karlll',
  },
  {
    label: 'Discord',
    link: 'https://discord.com/users/714641551065874482',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/p.karlll',
  },
]

export const EMAIL = 'karladrian.palmares@business.com'
