/**
 * Average time
Problem Statement
Reshma is an athlete, she will be participating in the 100m race so she started the practice and in every
practice session she started the race at x seconds and ended at y seconds. She wants to calculate the
average time taken from all the session N to complete the race.
Given an array having two index first index as start and second as end value ie. matrix[i][0] and matrix[i][1] and
i start from 0 to N
Input Format[
Z First line contains one integer number of sessions N.[
Z Each line contains two space separated integers denoting the start and end in seconds.
Output Format[
Z Average of all the race
Constraints[
Z n == mat[i].length[
Z 1 <= n <= 50[
Z 1 <= matrix[i][j] <= 105.
Sample Input 1
3
3 8
5 9
1 5
Sample Output 1
4
Explanation of Sample 1
First line represents n represent the number of sessions ie. 3
Input: matrix = [[3,8],[5,9],[1,5]]
Output: 4
Explanation:
1st subarray (3, 8) starts at 3 and end at 8 so the difference is 5
2nd subarray (5, 9) starts at 5 and end at 9 so the difference is 4
3rd subarray (1, 5) starts at 1 and end at 5 so the difference is 4
Average of all the above is (5 + 4 + 4) / 3 = 4

Sample Input 2
2
8 20
3 15
Sample Output 2
12
Explanation of Sample 2
First line represents n sessions ie. 2
Input: matrix = [[8, 20],[3, 15]]
Output: 12
Explanation:
1st subarray (8, 20) starts at 8 and end at 20 so the difference is 12
2nd subarray (3, 15) starts at 3 and end at 15 so the difference is 12
Average of all the above is (12 + 12) / 2 = 12
 */
//let mat = [[8,20],[3,15]];
let mat = [[3,8],[5,9],[1,5]];

let noOfSessions = mat.length;

let result = 0;

mat.forEach(session => {
    result+= session[1] - session[0];
})

let avgTime = Math.floor(result/noOfSessions);

console.log(avgTime);