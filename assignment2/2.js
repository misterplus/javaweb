function forLoop() {
    var sum = 0;
    for (i = 1; i < 51; i++) {
        if (i % 2 == 0)
            sum += i;
    }
    return sum;
}

function whileLoop() {
    var sum = 0;
    var i = 1;
    while (i < 51) {
        if (i % 2 == 0)
            sum += i;
        i++;
    }
    return sum;
}

console.log(forLoop());