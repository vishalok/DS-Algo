// your code goes here
var twoCitySchedCost = function (costs) {
    let totalCost = 0;
    costs.sort((a, b) => {
      return b[0] - b[1] - (a[0] - a[1]);
    });
   
    for (let i = 0; i < costs.length / 2; i++) {
      totalCost += costs[i][1];
    }
    for (let i = costs.length / 2; i < costs.length; i++) {
      totalCost += costs[i][0];
    }
    return totalCost;
  };
   
  const inpArr = [];
  const n = parseInt(readline());
  for (let i = 0; i < n; i++) {
      inpArr.push(readline().split(' ').map(item => parseInt(item)));
   
  }
   
  console.log(twoCitySchedCost(inpArr));