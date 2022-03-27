
export default function analyzeArray(arr) {
    let object = {};
    let sortedArr = arr.sort((a, b) => {return a - b});
    const sum = arr.reduce((total, num) => {
        return total + num;
    }, 0);
    object.average = sum / sortedArr.length;
    object.min = sortedArr[0];
    object.max = sortedArr[sortedArr.length - 1];
    object.length = sortedArr.length;

    return object;
}