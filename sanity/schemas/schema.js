import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import home from './home'
import about from './about'
import methodology from './methodology'
import commitment from './commitment'
import curatedClassesAndEvents from './curatedClassesAndEvents'
import residency from './residency'
import upcomingLocations from './upcomingLocations'
import investorRelations from './investorRelations'
import teamMember from './teamMember'
import classesTaught from './classesTaught'
import team from './team'
import instructor from './instructor'
import instructorExperience from './instructorExperience'
import instructorCredentials from './instructorCredentials'
import instructorExpertise from './instructorExpertise'
import desktopPhotos from './desktopPhotos'
import instructorContact from './instructorContact'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    home,
    about,
    methodology,
    commitment,
    curatedClassesAndEvents,
    residency,
    upcomingLocations,
    investorRelations,
    instructor,
    instructorContact,
    instructorExperience,
    instructorCredentials,
    instructorExpertise,
    classesTaught,
    desktopPhotos,
    team,
    teamMember
  ])
})
