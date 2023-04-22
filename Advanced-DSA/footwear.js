/**
 * Footwear pair formation
Problem Statement
Ranvier is working in a footwear manufacturing company where a pair of footwears are packed but
mistakenly some of the packed boxes have extra one footwear.
Given an array Ai integers element as a size of the footwear. Ranvier has to re pair the footwear if any
additional footwears are in the packed box.
Input Format
 First line contains a one integer number of boxes N.
 Next line contains Ai space separated integers denoting the pair of footwear.
Output Format
 Output should containing space separated integers denoting the pair of footwears size from the matrix in
each line
Constraints
 n == mat[i].length
 1 <= n <= 50
 1 <= matrix[i][j] <= 105.
Sample Input 1
3
3 3 8
9 8 9
15 15


Sample Output 1
3 3
9 9
15 15
8 8
Explanation of Sample 1
First line represents n represent the number of rows ie. 3
Input: matrix = [[3,3,8],[9,8,9],[15,15]]
Output: [[3,3],[9,9],[15,15], [8, 8]]
Explanation:
1st subarray (3, 3) are pair and 8 is the odd one
2nd subarray (9, 9) are pair and 8 is the odd one
3rd subarray (15, 15) are pair and nothing is the odd here
At last form a pair using the odd one from all the subarray, here (8, 8) are the remaining and we can form a
pair using that.
Sample Input 2
2
7 8
8 7
Sample Output 2
7 7
8 8
Explanation of Sample 2
First line represents m x n ie. 2 x 2 matrix (2 row , 2 columns)
Input: matrix = [[7,8],[8,7]]
Output: [[7,7],[8,8]]
Explanation:
1st subarray (7, 8) are not pair and both are odd one
2nd subarray (8, 7) are not pair and both are odd one
At last form a pair from the remaining element so we are forming a pairs as (7, 7) and (8, 8)
 */
function checkPairs(box){ // [3,3,8]
    let obj = {};

    let paired = [];
    let unpaired = [];

    for(let i =0; i< box.length; i++){
        if(obj[box[i]]){
            obj[box[i]] = obj[box[i]] +1;
        }else{
            obj[box[i]] = 1; // { "3" : 2, "8": 1}
        }
    }

    Object.keys(obj).forEach(value => {
        if(obj[value] > 1){
            paired.push(value, value)
        }else{
            unpaired.push(value);
        }
    })

    return {paired, unpaired}
}


//console.log(checkPairs([7,8]));
function pairFormation(mat){
    let pairedFormation = [];
    let unPairedFormation = [];

    mat.forEach(value => {
        
       let { paired, unpaired} =  checkPairs(value);
       if(paired.length > 0){
        pairedFormation.push(paired);
       }

       if(unpaired.length > 0){
        unPairedFormation.push(...unpaired);
       }
    });

    let {paired}=checkPairs(unPairedFormation);

    pairedFormation.push(paired);

    return pairedFormation;
}


//console.log(pairFormation([[7,8],[7,8]]))

console.log(pairFormation([[3,3,8],[9,8,9],[15,15]]))