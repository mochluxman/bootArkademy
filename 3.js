var value = [107, 1, -4, 's', 'a',
    0, -77
];

function chechk(value) {
    if (Array.isArray(value)) {
        if (value.length >= 3) {
            var p = value.length - 3;
            var a = value.sort();
            console.log(a);
            var ab = parseInt(a);
            var q = a[p];
            return q;
        } else {
            return "array kurang dari 3";
        }
    } else {
        return "bukan array";
    }
}




console.log(chechk(value));