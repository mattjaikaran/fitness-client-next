import { instructorsList } from '@/copy/instructors'

export default function handler(req, res) {
  const { id } = req.query
  const instructor = instructorsList.filter(instructor => instructor.id == id)
  res.status(200).json(instructor)
}
