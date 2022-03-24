function fib1(num){
    let fibMax = 0;
    let fibArr = [];
    for(let i = 0; i < num + 1; i++){
        if (fibArr.length > 1){
            fibMax += fibArr[fibArr.length - 2];
        }else if (fibArr.length === 1){
            fibMax = 1
        }else{
            fibMax = 0
        }
        fibArr.push(fibMax);
    }
    console.log(fibArr)
}
fib1(10)

// с рекурсией
function fib(n){
    for(let i = 0; i <= n; i++){
        if(n === 0){
            return [0]
        }else if(n === 1){
            return [0,1]
        }else{
            let arr = fib(n-1);
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
            return arr
        }

    }
}
console.log(fib(10));