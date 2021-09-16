import axios from 'axios'
// import { useState, useEffect } from 'react'

// export const getUserDetails = () => {
//   const [details, setDetails] = useState(null)
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(false)

//   const handleQuery = async (e) => {
//     setLoading(true)
//     try {
//       const response = await getInstructorData(router.query.id)
//       setDetails(response.data)
//       setLoading(false)
//     } catch (error) {
//       setError(err.response?.data.err)
//       setLoading(false)
//     }
//   }
//   useEffect(() => handleQuery(), [handleQuery])
//   return { details, loading, error, refetch: handleQuery }
// }

const API_URL = '/api/locations'

export async function getLocationDetails(slug) {
  console.log(slug);
  try {
    const response = await axios.get(`${API_URL}/${slug}`)
    const location = await response.data
    console.log('🚀 ~ file: getDetails.js ~ line 29 ~ getLocationData ~ location', location)
    return location[0]
  } catch (error) {
    console.log(error)
  }
}