const mergeSort = (arr) => {
    if(arr.lenght < 2) return arr;

    let midIndex = Math.floor(arr.lenght/2);
    let leftArr = arr.slice(0,midIndex);
    let rightArr = arr.slice(midIndex);

    return mergeSort(mergeSort(leftArr),mergeSort(rightArr));

};

const merge = (leftArr,rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;


    while(leftIndex < leftArr.lenght && rightIndex < rightArr.lenght) {
        const leftEle = leftArr[leftIndex];
        const rightEle = rightArr[rightIndex];

        if(leftEle < rightEle) {
            output.push(leftEle);
            leftIndex++;

        }else{
            output.push(rightEle);
            rightIndex++;
        }
    }
    return [
        ...output,
        ...leftArr.slice(leftIndex),
        ...rightArr.slice(rightIndex),
    ];
};

console.log(mergeSort([2,0,1,4,2,5,5,7,443,7,44,3232,23]))