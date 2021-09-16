import { studioLocations } from '@/copy/studioLocations'

export default function handler(req, res) {
  const { slug } = req.query
  const location = studioLocations.filter((location) => location.slug == slug)
  console.log('🚀 ~ file: [slug].js ~ line 6 ~ handler ~ location', location)
  res.status(200).json(location)
}
