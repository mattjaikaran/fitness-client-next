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
import team from './team'
import instructor from './instructor'

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
    team, 
    teamMember,
    instructor
  ]),
})
