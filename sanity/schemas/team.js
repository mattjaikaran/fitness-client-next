export default {
  name: 'team',
  title: 'Team Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    // need to figure out the 2 columns list.
    {
      name: 'columnOne',
      type: 'array',
      of: [{ type: 'teamMember' }]
    },
    {
      name: 'columnTwo',
      type: 'array',
      of: [{ type: 'teamMember' }]
    }
  ]
}
