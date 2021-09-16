import { studioLocations } from '@/copy/studioLocations'

export default function handler(req, res) {
  res.status(200).json(studioLocations)
}
