/*
Complete the code for isWeekend function and return the string "weekend" or "weekday"
Without using if-statement/ternary 
*/

function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();
    //console.log("Day: "+day);

    var weekName = {
        0: "weekend",
        6: "weekend",
        weekday: "weekday" 
    }
    return weekName[day] || weekName["weekday"];
};
console.log(isWeekend());