import * as api from "./api"
import * as utils from "./utils"

function getContainers(){
  // I want to retrieve containers from local storage.
  // If there are no containers in local storage then 
  
  // I want to retrieve data from KinrichDB.
  
  // If local data is behind then update local storage with KinrichDB data

}

function getContainersLocal(){
  const localContainers = localStorage.getItem("containers")
  if(localContainers){
    return localContainers
  } 
}

function getContainersAPI(){
  return api.getContainers()
  .then(({containers}) => {
    containers.sort(utils.compareDates);
    return containers
  })
}