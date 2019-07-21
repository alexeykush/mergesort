let arr = [1,123,2,4,32,5,3];
let sorted = [...arr];
mergeSort(sorted);

console.log(arr);
console.log(sorted);

function mergeSort(arr) {
    let middle = Math.floor(arr.length / 2);

    if(!middle) return;

    const leftArr = [];
    const rightArr = [];

    for(let i = 0; i < middle; i++){
        leftArr[i] = arr[i];
    }
    for(let i = middle; i < arr.length; i++){
        rightArr[i - middle] = arr[i]
    }
    mergeSort(leftArr);
    mergeSort(rightArr);
    sort(leftArr, rightArr, arr)
}
function sort(leftArr, rightArr, arr) {
    let index = 0;
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            arr[index++] = leftArr[leftIndex++];
        } else {
            arr[index++] = rightArr[rightIndex++];
        }
    }

    while(leftIndex < leftArr.length){
        arr[index++] = leftArr[leftIndex++];
    }
    while(rightIndex < rightArr.length){
        arr[index++] = rightArr[rightIndex++];
    }
}