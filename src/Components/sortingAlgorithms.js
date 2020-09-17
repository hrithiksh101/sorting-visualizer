export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);

    animations.push([i, i]);

    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);

    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function bubbleSort(array) {
  const animations = [];

  // now comes the part of dealing with the animations

  console.log(array)

  for (let i = 0; i < array.length; i++) {
    for (let j = 0 ; j < array.length  ; j++) {
      if (array[i] < array[j]) {


        animations.push([i, j]);
        animations.push([i, j]);
        animations.push( [i,j , array[j] , array[i] ] ) ;



        [array[j], array[i]] = [array[i], array[j]];

      }
    }
  }

  // after sorting the array

  console.log(array) ;

   return animations ;
}

export function InsertionSort(array) {
  // speedy recap of how insertion sort works

  const animations = [] ;

  console.log(array) ;

  for (let i = 0; i < array.length; i++) {
    let j = i - 1;
    let key = array[i];

    while (j >= 0 && array[j] > key) {
      [array[j + 1], array[j]] = [array[j], array[j + 1]];

      animations.push( [j,j+1] ) ;
      animations.push( [j,j+1] ) ;
      animations.push( [j,j+1 , array[j] , array[j+1] ] ) ;
      j--;
      // after swapping the values
    }

    array[j + 1] = key;
    

    // now iterating over the whole array
  }

    console.log( array , ' are the animations ' )

    return animations ;
}

export function quickSorter(array) {
  // This is the function of quickSort

  const animations = [] ;

  quickSort(array, 0, array.length - 1);

  function partition(array, left, right) {
    let pivot, i, j;

    pivot = array[Math.floor((left + right) / 2)];
    i = left;
    j = right;

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }

      while (array[j] > pivot) {
        j--;
      }

      if (i <= j) {
        // cool new trick to swap the elements
        [array[i], array[j]] = [array[j], array[i]];

        animations.push( [i , j] ) ;
        animations.push( [i , j] ) ;
        animations.push( [i,j , array[i] , array[j] ] ) ;

        i++;
        j--;
      }
    }

    return i;
  }

  function quickSort(array, left, right) {
    let index;

    if (array.length > 1) {
      index = partition(array, left, right);

      if (left < index - 1) {
        quickSort(array, left, index - 1);
      }

      if (index < right) {
        quickSort(array, index, right);
      }
    }

    return array;
  }

  return animations ;
}
