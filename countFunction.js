let counter = 0
const count = function () {
    return counter += 1
}
count.reset = function () {
    counter = 0
}

console.log(count());
console.log(count());
console.log(count());

count.reset();

console.log(count());
console.log(count());
console.log(count());