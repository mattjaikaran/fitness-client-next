import { boxStyles } from '@/copy/boxStyles'

export default function handler(req, res) {
  const { slug } = req.query
  const box = boxStyles.filter(
    (box) => box.slug == slug
  )
  res.status(200).json(box)
}
