var username = 'lukman';
var password = '22&AKAD';


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
    var pass2 = password.substr(2, 1);
    var pass3 = password.substr(3, 4);
    var pass4 = pass3.toUpperCase();
    if (pass == parseInt(pass) && (pass2 == '@' || pass2 == '&') && (pass4 == pass3)) {
        return true;
    } else {
        return false;
    }
}

console.log(validasiPass(password));