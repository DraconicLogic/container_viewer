import devData from './devData/devContainers.json';

const { REACT_APP_API_URL } = process.env
console.log('API URL:', REACT_APP_API_URL)
console.log("Process.env:", process.env.NODE_ENV)


export const getContainers = () => {
  if (process.env.NODE_ENV === 'development') {
    // Return dev data directly for development
    return Promise.resolve({ containers: devData.containers });
  } else {
    return fetch(REACT_APP_API_URL)
      .then((containers) => {
        return containers.json()
      })
      .catch(console.error)
  }
}