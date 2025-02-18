interface Employment {
  company: string
  companyZh: string
  link: string
  position: string
  date: string
  tasks: {
    title: string
    descriptions: string[]
  }[]
}

interface Education {
  school: string
  link: string
  degree: string
  date: string
  details: {
    content: string
    link: string
  }[]
}

interface Skill {
  type: string
  items: string[]
}

interface Resume {
  employment: Employment[]
  education: Education
  skills: Skill[]
  pdfLink: string
}

export const resume: Resume = {
  employment: [
    {
      company: 'Simpos',
      companyZh: '簡結科技',
      link: 'https://www.simpos.com.tw',
      position: 'Sr. Software Engineer',
      date: 'Oct 2021 - present',
      tasks: [
        {
          title: 'Web-based POS system',
          descriptions: [
            'Primary developer responsible for designing and implementing the POS system.',
            'Designed and implemented remote control functionality for POS system peripheral devices.',
            'Designed and implemented third-party system integrations.',
            'Study and implemented AI assistant using RAG.',
          ],
        },
        {
          title: 'System Optimization',
          descriptions: [
            'System Under Test: Analyze and implement POS System test and improve test coverage.',
            'Optimized a database with tens of millions of records, improving query efficiency by 70%+.',
          ],
        },
      ],
    },
    {
      company: 'Shopline Limited.',
      companyZh: '商線科技',
      link: 'https://shopline.tw',
      position: 'Sr. Software Engineer',
      date: 'May 2021 - Sep 2021',
      tasks: [
        {
          title: 'Middleware service between E-Commerce server and client',
          descriptions: [
            'Design and implement middleware services using Node.js, Express, MongoDB.',
            'Build microservices with AWS (Lambda, SES, SQS, S3 , API Gateway, etc.).',
            'Design RESTful API and build a document of the implementation plan.',
          ],
        },
      ],
    },
    {
      company: 'Outo ',
      companyZh: '探玩科技',
      link: 'https://www.outo.co/',
      position: 'Software Engineer',
      date: 'Jan 2021 - Mar 2021',
      tasks: [
        {
          title: 'Outo outdoor activity platform',
          descriptions: [
            'Design and implement the back-end server using TypeScript, Express, MySQL.',
            'Build servers with AWS (EC2 , VPC, RDS).',
          ],
        },
      ],
    },
    {
      company: 'PlayNitride Inc.',
      companyZh: '錼創顯示科技',
      link: 'https://www.playnitride.com/',
      position: 'Software Engineer',
      date: 'Feb 2020 - Nov 2020',
      tasks: [
        {
          title: 'Internal production line management system',
          descriptions: [
            'Design and implement the front-end production line management system using Vue.js.',
            'Assist partners in building back-end servers using Python (Flask-RESTful).',
          ],
        },
      ],
    },
    {
      company: 'Mapacode Inc.',
      companyZh: '動程科技',
      link: 'https://www.facebook.com/mapacode/?locale=zh_TW',
      position: 'Software Engineer',
      date: 'Dec 2015 - Jan 2020',
      tasks: [
        {
          title: 'Jukebox back-end website',
          descriptions: ['Design and implement back-end website using React.js, GraphQL.'],
        },
        {
          title: 'New generation CNC',
          descriptions: [
            'Design and implement web HMI using React.js.',
            'Maintain and implement motion controller and algorithm (Rust language).',
            'Integration web HMI and motion controller.',
          ],
        },
        {
          title: 'IoT system integration',
          descriptions: [
            'Design and implement data collection of peripheral sensors using Node.js.',
            'Design and implement CNC monitoring with MTConnect protocol.',
            'Using Modbus protocol to fetch data from sensors on ARM-based.',
            'Maintain CNC: Maintain web HMI (Yahoo Mojito framework) and motion controller.',
          ],
        },
      ],
    },
  ],

  education: {
    school: 'National Yunlin University of Sci. & Tech.',
    link: 'https://www.yuntech.edu.tw/',
    degree: 'Graduate Student',
    date: 'Jul 2013 - Aug 2015',
    details: [
      {
        content: 'Thesis: Intelligent Autonomous Vehicle with LiDAR Guidance',
        link: 'https://reurl.cc/j77NxD',
      },
      {
        content: 'Refine the experimenting UGV platform with Linux-based (Raspberry Pi).',
        link: 'https://reurl.cc/72V8x9',
      },
    ],
  },

  skills: [
    {
      type: 'Programming Languages',
      items: ['TypeScript/JavaScript', 'Python', 'Rust'],
    },
    {
      type: 'Technologies',

      items: ['Node.js/Nest.js', 'React.js/Vue.js', 'MongoDB/SQL/Redis', 'RESTful API/WebSocket'],
    },
    {
      type: 'Dev.Tools',
      items: ['Docker', 'GCP/AWS', 'Vim/tmux'],
    },
  ],
  pdfLink: 'https://drive.google.com/file/d/19CRW9iyKGltRNMslHVY-AXcARbuhFoLI/view?usp=sharing',
}
