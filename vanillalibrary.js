// function that splits a number into an array of it's values 36 returns [6, 30]

function splitIntoValues (n) {
    var values = [];
    let multiplyer = 1;

    while (n > 0) {
        let remainder = n % 10

        if (remainder > 0) {
            values.push(remainder * multiplyer)
        }
        n = Math.floor(n / 10)
        multiplyer = multiplyer * 10
    }
    return values;
}
