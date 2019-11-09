var username = 'lukman';
var password = 'arkademy';

function validasi(username, password) {
    if (username.length >= 5 && username.toLowerCase) {
        return true;
    } else {
        return false;
    }
}
console.log(validasi(username));