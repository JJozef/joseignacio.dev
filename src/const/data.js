export const MENU_ITEMS = [
  {
    name: 'Inicio',
    path: '/',
    segment: null
  },
  {
    name: 'Sobre mi',
    path: '/about',
    segment: 'about'
  }
]

export const WORK_EXPERIENCE = [
  {
    id: 1,
    position: 'Full Stack Developer',
    company: {
      name: 'OPCIONES S.A.',
      location: 'Chile, CL',
      industry: 'Soluciones TI | Data Center',
      image_url: '/experience/opciones.png',
      site: 'https://www.opciones.cl'
    },
    workType: 'Freelance | Remoto',
    startDate: 'Junio 2024',
    endDate: 'Presente',
    responsibilities: [
      'Brindar soporte técnico integral en diversos proyectos, asegurando su continuidad operativa y la satisfacción del cliente.',
      'Desarrollar e implementar nuevas funcionalidades, aplicando las últimas tecnologías y mejores prácticas de desarrollo para mejorar la eficiencia y la experiencia del usuario.',
      'Crear y aplicar diseños responsivos para garantizar una experiencia óptima en diferentes dispositivos y pantallas en nuestras aplicaciones web.'
    ],
    tecnologies: [
      'Apache Ofbiz',
      'Vuejs',
      'PostgreSQL',
      'Git',
      'Jira',
      'Bitbucket'
    ]
  },
  {
    id: 2,
    position: 'Full Stack Developer',
    company: {
      name: 'OPCIONES S.A.',
      location: 'Chile, CL',
      industry: 'Soluciones TI | Data Center',
      image_url: '/experience/opciones.png',
      site: 'https://www.opciones.cl'
    },
    workType: 'Full Time | Presencial',
    startDate: 'Agosto 2023',
    endDate: 'Mayo 2024',
    responsibilities: [
      'Brindar soporte técnico integral en diversos proyectos, asegurando su continuidad operativa y la satisfacción del cliente.',
      'Desarrollar e implementar nuevas funcionalidades, aplicando las últimas tecnologías y mejores prácticas de desarrollo para mejorar la eficiencia y la experiencia del usuario.',
      'Crear y aplicar diseños responsivos para garantizar una experiencia óptima en diferentes dispositivos y pantallas en nuestras aplicaciones web.'
    ],
    tecnologies: [
      'Apache Ofbiz',
      'Vuejs',
      'H2 Database',
      'Git',
      'Jira',
      'Bitbucket',
      'Elasticsearch',
      'Docker',
      'Ruby on Rails'
    ]
  }
]
