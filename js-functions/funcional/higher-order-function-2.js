// curring
function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

const nyFinalPrice = finalPrice(0.0875)

console.log(nyFinalPrice(25.1))
console.log(nyFinalPrice(21.7))
console.log(nyFinalPrice(107.9))