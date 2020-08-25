const { REACT_APP_API_URL } = process.env

export const getContainers = () => {
  return fetch(REACT_APP_API_URL)
  .then((containers) => {
    return containers.json()    
  })
  .catch(console.error)
}