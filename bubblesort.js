function bubbleSort(arr) {
  for (let segVuelta = 1; segVuelta < arr.length; segVuelta++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i);
      }
    }
  }
  return arr;
}

function swap(arr, i) {
  let temporal = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = temporal;
}
function merge(arr1, arr2) {
  //ARR1 Y ARR2 LLEGAN ORDENADOS
  let result = [];
  let i = 0; //indice que recorre el arreglo 1
  let j = 0; //indice que recorre el arreglo 2

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  let arrToConcat; // para guardar los valores que faltan

  if (i === arr1.length) {
    //arreglo  1 cargado, check
    // quedan valores por cargar del arr2
    arrToConcat = arr2.slice(j);
  } else {
    // quedan valores por cargar del arr1
    arrToConcat = arr1.slice(i);
  }
  return result.concat(arrToConcat);
}

function mergeSort(array) {
  //caso base:
  if (array.length <= 1) return array;

  //let [left, rigth] = split(array)

  const left = split(array)[0];
  const right = split(array)[1];

  return merge(mergeSort(right), mergeSort(left));
}
