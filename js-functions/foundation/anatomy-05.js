function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5, 6)
logParams(1, 2, 3)
logParams(1, 2)
logParams(1)
logParams()

function defaultParams(a, b, c = 0) {
    console.log(a, b, c)
}

defaultParams( 4, 5, 6)
defaultParams( 4, 5)

// spread/rest
function logNums(...nums) {
    console.log(nums)
}

logNums(1, 2, 3, 4, 5, 6);



function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(1, 2, 3, 4))

