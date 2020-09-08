var str = "Shafiq";
var num = 3
const myFuct = (parms) => {
    if (typeof(parms) === typeof("a")) {
        return `Mr.${parms}`;
    }
    if (typeof(parms) === typeof(1)) {
        return parms*parms;
    }
}

console.log(myFuct(str));
console.log(myFuct(num));