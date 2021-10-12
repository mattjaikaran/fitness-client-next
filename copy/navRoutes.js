export const navRoutes = [
  {
    id: 1,
    name: 'Locations',
    link: '/locations',
    submenu: [
      {
        id: 1,
        name: 'Tribeca',
        link: '/locations/tribeca'
      },
      {
        id: 2,
        name: 'Flatiron',
        link: '/locations/flatiron'
      }
    ]
  },
  {
    id: 2,
    name: 'Instructors',
    link: '/instructors'
  },
  // {
  //   id: 3,
  //   name: 'Calendar',
  //   link: '/calendar'
  // },
  // {
  //   id: 4,
  //   name: 'Actions',
  //   link: '/actions',
  //   submenu: [
  //     {
  //       id: 1,
  //       name: 'Yoga',
  //       link: '/actions/yoga'
  //     },
  //     {
  //       id: 2,
  //       name: 'Pilates',
  //       link: '/actions/pilates'
  //     }
  //   ]
  // },
  {
    id: 5,
    name: 'Styles',
    link: '/styles',
    // submenu: [
    //   {
    //     id: 1,
    //     name: 'Rooted Box',
    //     link: '/style/rooted-box'
    //   },
    //   {
    //     id: 2,
    //     name: 'Nuclear Box',
    //     link: '/style/nuclear-box'
    //   }
    // ]
  },
  {
    id: 6,
    name: 'Curates',
    link: '/curates'
  },
  {
    id: 7,
    name: 'Memberships',
    link: '/memberships'
  }
]