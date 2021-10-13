import axios from 'axios'

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://sstudioss.com'
const API_URL = `${url}/api/instructors`
const headers = {
  "Access-Control-Allow-Methods": "GET"
}

export async function getAllInstructorIds() {
  try {
    const response = await axios.get(`${API_URL}`, headers)
    const instructors = await response.data
    return instructors.map(instructor => {
      return {
        params: {
          slug: instructor.slug
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export async function getInstructorData(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`, headers)
    const instructor = await response.data
    return instructor[0]
  } catch (error) {
    console.log(error)
  }
}
