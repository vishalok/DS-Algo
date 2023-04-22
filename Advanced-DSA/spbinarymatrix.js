/**
 * Special Positions in a Binary Matrix
Problem Statement
Given an m x n binary matrix mat, return the number of special positions in mat.
A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and
columns are 0-indexed).
Input Format
● First line contains a one integer number of sessions N.
● Next line contains mat[i][j] space separated integers 0 or 1
Output Format
● Number of special position
Constraints
● m == mat.length
● n == mat[i].length
● 1 <= m, n <= 100
● mat[i][j] is either 0 or 1.
Sample Input 1
3
1 0 0
0 0 1
1 0 0

Sample Output 1
1
Explanation of Sample 1
Image Link: Click here

Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are
0.
Sample Input 2
3
1 0 0
0 1 0
0 0 1
Sample Output 2
3
Explanation of Sample 2
Image Link: Click here

Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
Explanation: (0, 0), (1, 1) and (2, 2) are special positions.
 * @param {*} mat 
 * @returns 
 */

var numSpecial = function(mat) {
    let row = mat.length;
    let col = mat[0].length;

// SC = o(row+col)
// TC = o(row*col)
    let rowCounter = new Array(row).fill(0); // [0,0,0]
    let colCounter = new Array(col).fill(0);// [0,0,0]

    for(let i = 0; i< row; i++){
        for(let j = 0; j<col; j++){
            if(mat[i][j]==1){
                rowCounter[i]++;
                colCounter[j]++;
            }
        }
    }

    let counter = 0;

    for(let i = 0; i< row; i++){
        for(let j = 0; j< col; j++){
            if(mat[i][j] === 1 && rowCounter[i] === 1 && colCounter[j] === 1){
                counter++;
            }
        }
    }

    return counter;

};

let mat = [[1,0,0],[0,0,1],[1,0,0]];
console.log(numSpecial(mat)); 