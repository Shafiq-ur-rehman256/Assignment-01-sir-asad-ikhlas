var str = prompt("Enter String!");
var mainLoop = 0;
for (let i = 0; i < str.length; i++) {
   if (str[i]===" ") {
       mainLoop++;
   } 
}
for (let i = 0; i < mainLoop; i++) {
    str = str.replace("  "," ");
}

alert(str.trim());