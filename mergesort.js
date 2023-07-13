function split(arr) {
  let mitad = Math.floor(arr.length / 2)

  let primerMitad = arr.slice(0, mitad)
  let segundaMitad = arr.slice(mitad)


  return [primerMitad, segundaMitad];
}

function merge(arr1, arr2) {
  let arrFinal = arr1.concat(arr2)
  return arrFinal
}

function mergeSort(arr){
  
  let [arr1,arr2]=split(arr)

  let n1 = mergeSort(arr1)
  let n2 = mergeSort(arr2)

  return merge (n1,n2)
}