
function generatePassword() {
var slider = document.getElementById("passwordLength").value;
var length = slider
var charset = "abcdefghijklmnopqrstuvwxyz";
var password = "";
var specialChars = "!@#$%^&*()_+{}[]|:;<>,.?/~"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberset = "1234567890"

if (document.getElementById('specialChars').checked) {
    charset += specialChars;
}
if (document.getElementById('uppercase').checked) {
    charset += uppercase;   
}
if (document.getElementById('numberset').checked) {
    charset += numberset;
}
for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
}

document.getElementById('generatedPassword').textContent = password;
}

function slider() {
    var slider = document.getElementById("passwordLength").value;
    var lengthvalue = document.getElementById("Passwordvalue").innerHTML=slider
} 
;