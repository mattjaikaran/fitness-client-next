import { boxStyles } from '@/copy/boxStyles'

export default function handler(req, res) {
  res.status(200).json(boxStyles)
}
