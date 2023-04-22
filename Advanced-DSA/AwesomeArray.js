output = 0;
function awesomeArrays(arr)
{
    arr.sort(function(a, b)
    {
        return a - b;
    });
    this.solve(arr, Array(arr.length).fill(false), new Array());
    return this.output;
}
function solve(arr, visited, temp)
{
    if (temp.length == arr.length)
    {
        this.output++;
        return;
    }
    for (var i = 0; i < arr.length; i++)
    {
        if (i > 0 && arr[i] == arr[i - 1] && !visited[i - 1])
        {
            continue;
        }
        if (visited[i])
        {
            continue;
        }
        if (temp.length > 0)
        {
            var sum = temp[temp.length - 1] + arr[i];
            if (!this.perfectSquare(sum))
            {
                continue;
            }
        }
        visited[i] = true;
        (temp.push(arr[i]) > 0);
        this.solve(arr, visited, temp);
        visited[i] = false;
        temp.splice(temp.length - 1, 1);
    }
}
function perfectSquare(sum)
{
    var sqrt = parseInt(Math.sqrt(sum));
    return sum - (sqrt * sqrt) == 0;
}

arr = readline().split(',').map(item => parseInt(item));
output = awesomeArrays(arr);
console.log(output);