export default {
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  fields: [
    { name: 'fullName', type: 'string' },
    { name: 'firstName', type: 'string' },
    { name: 'lastName', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'fullName' } },
    { name: 'classesTaught', type: 'classesTaught' },
    { name: 'bio', type: 'text' },
    { name: 'featuredPhoto', type: 'url' },
    { name: 'contact', type: 'instructorContact' },
    { name: 'desktopPhotos', type: 'desktopPhotos' },
    { name: 'instructorExperience', type: 'instructorExperience' },
  ]
}
