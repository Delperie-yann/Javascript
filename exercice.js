function exo1() {

    alert("hello")
}
function exo2() {

    console.log("Hello world")
}
function exo3() {
    var value = prompt(" quel est votre nombre");

    if (value % 2 == 0) {
        console.log("paire");
        return true;
    } else {
        console.log("impaire");
        return false
    }
}
function exo4() {
    var str = prompt("quel est votre phrase");
    var str1 = str.split(" ");
    alert(str1[0]);
}

function upperCaseFirstWord() {
    var str = prompt("Saisies une phrase");
    var str1 = str.charAt(0);
    alert((str1.toUpperCase()) + str.toLowerCase());
}
function lowerCase() {
    var str = prompt("Saisies une phrase");
    alert(str.toLowerCase());
}
function tab() {
    var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    for (var i = 0; i < array.length; i++) {
        //let pour la boucle uniquemeent.
        //var a une porté global.
        alert(array[i]);
    } console.log(i);
}
function mdp() {
    var mot = prompt("Saisies un mot de passe");
    var N = 0;
    for (var i = 0; i < mot.length; i++) {
        console.log(i + 1);
    }
    if (mot.match(/[0-9]/)) {
        N = N + 10;
    }
    if (mot.match(/[a-z]/)) {
        N = N + 26;
    }
    if (mot.match(/[A-Z]/)) {
        N = N + 26;
    }
    console.log("log = " + (mot.length) * (Math.log2(N)));
}
function saisi() {

    do {
        var mot = prompt("Male ou Femelle");
        var str = mot.toLowerCase();

        if (str === "femelle") {
            alert("Femelle");
            break;
        }
        if ((str === "male") | (str === "mâle")) {
            alert("Male");
            break;
        }
    } while (str != "femelle" | str != "male");

}
function mdpFort() {
    var mot = prompt("Saisies un mot de passe");
    var N = 0;
    for (var i = 0; i < mot.length; i++) {
        console.log(i + 1);
    }
    if (mot.match(/[0-9]/)) {
        N = N + 10;
    }
    if (mot.match(/[a-z]/)) {
        N = N + 26;
    }
    if (mot.match(/[A-Z]/)) {
        N = N + 26;
    }
    console.log("log = " + (mot.length) * (Math.log2(N)));
}