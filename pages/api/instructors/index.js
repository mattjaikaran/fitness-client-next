import { instructorsList } from '@/copy/instructors'

export default function handler(req, res) {
  res.status(200).json(instructorsList)
}
