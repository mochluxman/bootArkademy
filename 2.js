var username = 'lukman';
var password = '22@kademy';


function validasi(username) {
    var lun = username.toLowerCase();
    if (username.length >= 5 && username == lun) {
        return true;
    } else {
        return false;
    }
}
console.log(validasi(username));

function validasiPass(password) {
    var pass = password.substr(0, 2);
    if (pass == parseInt(pass)) {
        return true;
    } else {
        return false;
    }
}

console.log(validasiPass(password));