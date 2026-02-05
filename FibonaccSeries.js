function fibonacciSeries(n) {
    const series = [];

    for(let i=0; i<n; i++) {
        if(i === 0 ){
            series.push(0)
        } else if(i === 1){
            series.push(1)
        } else {
            series.push(series[i-1] + series[i -2])
        }
        
    }
    return series;
}

console.log(fibonacciSeries(6)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]