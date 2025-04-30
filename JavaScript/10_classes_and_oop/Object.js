function MultiplyBy5(num) {
    return num * 5;
}

MultiplyBy5.power = 2;

console.log(MultiplyBy5(5));        // ✅ 25
console.log(MultiplyBy5.power);     // ✅ 2
console.log(MultiplyBy5.prototype); // ✅ {}
