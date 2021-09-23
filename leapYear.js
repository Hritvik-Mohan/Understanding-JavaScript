function isLeap(year) {
    
    if(year%4 === 0) {
        if(year%100 === 0) {
        
            if(year%400 === 0) {
                return year + " is a leap year."
            } else {
                return year + " is not leap year."
            }
            
        } else {
            return year + " is a leap year."
        }

    } else {
        return year + " is not leap year."
    }

}

var isLeapYear = isLeap(2021);
console.log(isLeapYear)



// for (i = 1990; i<=2030;i++){
//     var isLeapYear = isLeap(i);
//     console.log(isLeapYear)
// }