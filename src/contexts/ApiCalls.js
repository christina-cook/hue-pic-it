const apiAuth = 'TxxKnYwWjOR3kXQ-IUBvuGO3W_mryJB4xTIrlcXAH_Q'
const baseUrl = 'https://api.unsplash.com/search/photos/'

const unsplash = {
  fetchSingleColor(color){
    return fetch(`${baseUrl}?query=${color}&client_id=${apiAuth}`)
  }
}

export default unsplash