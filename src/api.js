const { REACT_APP_API_URL } = process.env

export const getContainers = () => {
  console.log(process.env)
  console.log(REACT_APP_API_URL)

  return fetch(REACT_APP_API_URL)
  .then((containers) => {
    return containers.json()
    
  })
  .catch(console.error)
}