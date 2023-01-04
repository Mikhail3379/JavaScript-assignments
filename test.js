 "use strict" ;
 // wrte a function to take a positive integer and return the largest power of 2
// that is less than or equal to this integer 
    // example: 5 -> 4
    function nearestPowerOfTwo(n) {
        for( let i = 0; i < n; i++) {
            if(Math.pow(2, i) > n) {
                return Math.pow(2, i-1);
            }
              else {
                return false
                   }
            
        }
    }
    nearestPowerOfTwo(5); // 4
    console.log(nearestPowerOfTwo(5)); // 4