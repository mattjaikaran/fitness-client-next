export default {
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  fields: [
    { name: 'firstName', type: 'string' },
    { name: 'lastName', type: 'string' },
    { name: 'fullName', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'fullName' } },
    { name: 'bio', type: 'text' },
    { name: 'featuredPhoto', type: 'url' },
  ]
}
