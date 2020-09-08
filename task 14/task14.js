var arr = [12,15,66,88,5,77,120,99];

const toAssending = (array) => {
    var temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i]<array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            } 
        }
    }
    console.log(array);
}
const toDessending = (array) => {
    var temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i]>array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            } 
        }
    }
    console.log(array);
}
console.log("Array in Assending order");
toAssending(arr);
console.log("Array in Dessending order");
toDessending(arr);