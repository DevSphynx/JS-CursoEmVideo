// 5! = 5 * 4 * 3 * 2 * 1 = 120

/*function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c    // igual a fat = fat * c
    }
    return fat
}
console.log(fatorial(5))
*/
// RECURSIVIDADE

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
