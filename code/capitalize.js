

export default function capitalize(str) {
    let arr = str.toLowerCase().split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
}