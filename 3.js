// var value = [1, 2, 3, 4, 5, 6];
//var value = "bukan array nih"
//var value = [1, 2];
var value = [107, 1, -4, 'a', 'true', 0, -77];

function chechk(value) {
    if (Array.isArray(value)) {
        if (value.length >= 3) {
            var p = value.length - 3;
            var a = value.sort();
            // console.log(a);
            var ab = parseInt(a);
            var q = a[p];
            return q;
        } else {
            return "Minimal array length is 3!";
        }
    } else {
        return "Parameter should be an array!";
    }
}

console.log(chechk(value));