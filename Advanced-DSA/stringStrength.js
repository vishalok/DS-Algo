// formulae -> (index - window + 1);
/**
 * String Strength
Let us assume there is a new logic defined to determine strength of a word, which is a longest possible substring of the word that only has unique characters in it. 
For example, the word "random" has a strength of 100%, which is derived on the logic that it has all unique characters in it, so length of the longest substring with unique characters / length of the word (input string) in percentage will give us 100.
We will be given with a string s, find the strength of the string by determining length of the longest substring without repeating characters.
Example 1:
Input: s = "abytffcde"
Output: 55.55
Explanation: The answer is "abytf", so the string strength here is 55.55%.

Example 2:
Input: s = "cccc"
Output: 25
Explanation: The answer is "c", so the string strength here is 25%.

Example 2:
Input: s = "pwwkew"
Output: 50
Explanation: The answer is "wke",so the string strength here is 50%.
Note: The answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
0 <= input string length <= 5 * 104 
Input string consists of English letters, digits, symbols and spaces.
Approach:
We're going to use something called the sliding window approach.
Our sliding window will represent the current substring of non-repeating characters that we are on.
We will be working with a sliding window of variable size.
Our window will grow or shrink in size as we iterate through the string.
We will create a for loop representing the end of the window.
We will create a WindowsCharsMap that will store characters and its index values as key value pairs.
At every iteration we will check for the windowStart that will track the window start position and also the size of that window.
When (windowsCharsMap[character at ith pos] >= windowStart) 
Then, windowStart = windowsCharsMap[endChar] + 1, which is the index of the character last appeared in the input string plus one to update window size.
We will be also updating the maxLength, which is storing the max length of substring with unique characters      
maxLength = maximum of maxLength or index position of current char - windowStart + 1
Return the percentage of maxLength / input string length.
 */
const wordStrength = function(s) {
    let windowsCharsMap = {};
    let windowStart = 0;
    let maxLength = 0;
 
    for ( let i = 0; i < s.length; i++ ) {
       const endChar = s[i];
 
       if(windowsCharsMap[endChar] >= windowStart) {
          windowStart = windowsCharsMap[endChar] + 1;
       }
       windowsCharsMap[endChar] = i;
       maxLength = Math.max(maxLength, i - windowStart + 1);
    }
 
    return ((maxLength / s.length) * 100).toFixed(2);
 }
//TC
 print(wordStrength(readline()))