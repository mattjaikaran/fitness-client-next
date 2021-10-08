export default {
  name: 'investorRelations',
  title: 'Investor Relations Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { 
      name: 'upcomingLocationsList', 
      type: 'array',
      of: [{ type: 'upcomingLocations' }]
    },
  ]
}
