var myMarks = [30,45,68,32,45];
var criteria = 30; 
var bonusPoints = 5;
for (let i = 0; i < myMarks.length; i++) {
    myMarks[i]+=5;
}
for (let i = 0; i < myMarks.length; i++) {
    if (myMarks[i]>=30) {
        console.log(`Student at ${i} index is passed`);
    }
    else{
        console.log(`Student at ${i} index is Failed`);
    }
}