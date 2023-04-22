//formula -> ( string.length - index - 1  );

/**
 * Another Number System
We are introduced with a new number system where 
A represents as 1
B represents as 2
C represents as 3
...
Z represents as 26
AA represents as 27
AB represents as 28 
...
Let’s call this system the ALPHA numeric system. And our goal here is to convert the number given in ALPHA numeric form to the DECIMAL number system.

Example 1:
Input: "AA"
Output: 27

Example 2:
Input:  "ABC"
Output: 731

Example 3:
Input:  "J"
Output: 10
 
Constraints:
1 <=input string length <= 7
Input string consists only of uppercase English letters.
Input string is in the range ["A", "FXSHRXW"].
Approach:
Like in DECIMAL number system when we see 143, we say that it is 1 hundred 40 tens and 3, i.e., 1 x 10*2 + 4 x 10*1 + 3 x 10*0 = 143.
We will be implementing the same logic here as well, all we have to do is replace 10 with 26, which is our new base of the number system here.
Calculate the unitVal: power of 26 at that position
And the currentIndexValue: value of the current letter, e.g. 11 for K
Apply the above formula 
And return the decimal value.
 */

function convertToDecimal(string){
    let result = 0;

    for(let i = 0; i< string.length; i++){
        let twentySixWithBase = Math.pow(26, string.length-i-1);

        let numericValue = string[i].charCodeAt(0)-64;

        result += numericValue * twentySixWithBase;
    }

    return result;
}

// TC - O(n);
// SC - O(1);   
print(convertToDecimal(readline()))