export function updateLocalContainers(dbContainers){
  console.log(dbContainers)
  localStorage.setItem("containers", JSON.stringify(dbContainers))
}

export function getContainersLocal(){
  return JSON.parse(localStorage.getItem("containers"))
}
