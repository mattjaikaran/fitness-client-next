import { studioLocations } from '@/copy/studioLocations'

export default async function handler(req, res) {
  const { slug } = req.query
  const location = await studioLocations.filter((location) => location.slug == slug)
  console.log('🚀 ~ file: [slug].js ~ line 6 ~ handler ~ location', location)
  return res.status(200).json(location)
}
