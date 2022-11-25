export function updateLocalContainers(dbContainers){
  localStorage.setItem("containers", JSON.stringify(dbContainers))
}

export function getContainersLocal(){
  return JSON.parse(localStorage.getItem("containers"))
}
