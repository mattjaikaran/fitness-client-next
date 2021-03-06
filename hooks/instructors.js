import axios from 'axios'

const API_URL = '/api/instructors'

export async function getAllInstructorIds() {
  try {
    const response = await axios.get(`${API_URL}`)
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
    const response = await axios.get(`${API_URL}/${id}`)
    const instructor = await response.data
    return instructor[0]
  } catch (error) {
    console.log(error)
  }
}
