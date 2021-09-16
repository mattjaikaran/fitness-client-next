import { instructorsList } from '@/copy/instructors'

export default function handler(req, res) {
  const { slug } = req.query
  const instructor = instructorsList.filter(instructor => instructor.slug == slug)
  res.status(200).json(instructor)
}
