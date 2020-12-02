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
    //str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
/*function lowerCase(d) {
    //var str = prompt("Saisies une phrase");
    //var str1=str.toLowerCase();
    //alert(str1.replace(' ',''));
    let d = p.split(' ');
    console.log(d)
    let strResult = d[0].toLowerCase();
    for(let i = 1 ; i> d.length ; i++){
        strResult+= firstLetter(d[i]);
    }
return strResult;
}*/
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
    if (mot.match(/[ ]/)) {
        N = N + 8;
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
    do {
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

    } while (((mot.length) * (Math.log2(N))) <= 104);
    alert("le mot de passe est bon");
}
function month() {
    var n = prompt("Saisies un mot ");
    var arry = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    if (n > array.length && n < 1) {
        console.log('erreur');

    } else {
        var m = array[n - 1];
    }
    return m

}
var res, plus, diz, s, un, mil, mil2, ent, deci, centi, pl, pl2, conj;

var t = ["", "Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf"];
var t2 = ["Dix", "Onze", "Douze", "Treize", "Quatorze", "Quinze", "Seize", "Dix-sept", "Dix-huit", "Dix-neuf"];
var t3 = ["", "", "Vingt", "Trente", "Quarante", "Cinquante", "Soixante", "Soixante", "Quatre-vingt", "Quatre-vingt"];



window.onload = calcule

function calcule() {

    document.getElementById("t").onkeyup = function () {
        document.getElementById("lettres").firstChild.data = trans(this.value)
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// traitement des deux parties du nombre;
function decint(n) {

    switch (n.length) {
        case 1: return dix(n);
        case 2: return dix(n);
        case 3: return cent(n.charAt(0)) + " " + decint(n.substring(1));
        default: mil = n.substring(0, n.length - 3);
            if (mil.length < 4) {
                un = (mil == 1) ? "" : decint(mil);
                return un + mille(mil) + " " + decint(n.substring(mil.length));
            }
            else {
                mil2 = mil.substring(0, mil.length - 3);
                return decint(mil2) + million(mil2) + " " + decint(n.substring(mil2.length));
            }
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// traitement des nombres entre 0 et 99, pour chaque tranche de 3 chiffres;
function dix(n) {
    if (n < 10) {
        return t[parseInt(n)]
    }
    else if (n > 9 && n < 20) {
        return t2[n.charAt(1)]
    }
    else {
        plus = n.charAt(1) == 0 && n.charAt(0) != 7 && n.charAt(0) != 9 ? "" : (n.charAt(1) == 1 && n.charAt(0) < 8) ? " et " : "-";
        diz = n.charAt(0) == 7 || n.charAt(0) == 9 ? t2[n.charAt(1)] : t[n.charAt(1)];
        s = n == 80 ? "s" : "";

        return t3[n.charAt(0)] + s + plus + diz;
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// traitement des mots "cent", "mille" et "million"
function cent(n) {
    return n > 1 ? t[n] + " Cent" : (n == 1) ? " Cent" : "";
}

function mille(n) {
    return n >= 1 ? " Mille" : "";
}

function million(n) {
    return n >= 1 ? " Millions" : " Million";
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// conversion du nombre
function trans(n) {

    // vérification de la valeur saisie
    if (!/^\d+[.,]?\d*$/.test(n)) {
        return "L'expression entrée n'est pas un nombre."
    }

    // séparation entier + décimales
    n = n.replace(/(^0+)|(\.0+$)/g, "");
    n = n.replace(/([.,]\d{2})\d+/, "$1");
    n1 = n.replace(/[,.]\d*/, "");
    n2 = n1 != n ? n.replace(/\d*[,.]/, "") : false;

    // variables de mise en forme
    ent = !n1 ? "" : decint(n1);
    deci = !n2 ? "" : decint(n2);
    if (!n1 && !n2) {
        return "Entrez une valeur non nulle!"
    }
    conj = !n2 || !n1 ? "" : "  et ";
    euro = !n1 ? "" : !/[23456789]00$/.test(n1) ? "" : "";
    centi = !n2 ? "" : "";
    pl = n1 > 1 ? "" : "";
    pl2 = n2 > 1 ? "" : "";

    // expression complète en toutes lettres
    return (" " + ent + euro + pl + conj + deci + centi + pl2).replace(/\s+/g, " ").replace("cent s E", "cents E");

}






/* FONCTIONS DE REMPLACEMENT DES CHIFFRES */
function calcule2() {


    // Déclaration des variables
    var nombre = parseInt(prompt('Entrez un nombre entre 1 et 1999'), '10');
    var chiffre = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var chiffre_diz = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var chiffre_cent = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var unite = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    var unitediz = ['', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
    var diz = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
    var cents = ['', 'cent', 'deux cent', 'trois cent', 'quatre cent', 'cinq cent', 'six cent', 'sept cent', 'huit cent', 'neuf cent'];
    var mille = ['', 'mille', 'deux mille', 'trois mille', 'quatre mille', 'cinq mille', 'six mille', 'sept mille', 'huit mille', 'neuf mille'];
    var nbre_chiffres, resultat = 'encore inconnu';

    // FONCTION DE REMPLACEMENT DES UNITES
    function remp_unit() {
        for (var i = 0; i <= 9; i++) {
            if (nombre.charAt(nombre.length - 1) == chiffre[i]) {
                resultat = unite[i];
            }
        }
    }

    // FONCTION DE REMPLACEMENT DES DIZAINES
    function remp_diz() {
        for (var i = 0; i <= 9; i++) {
            if (nombre.charAt(nombre.length - 2) == chiffre[i]) {
                //détermination des syntaxes particulières
                if (chiffre_diz[i] >= 1 && nombre.charAt(nombre.length - 1) == 0) {
                    resultat = diz[i] + resultat;
                } else if (chiffre_diz[i] == 1 && (nombre.charAt(nombre.length - 1) == 1 || nombre.charAt(nombre.length - 1) == 2 || nombre.charAt(nombre.length - 1) == 3 || nombre.charAt(nombre.length - 1) == 4 || nombre.charAt(nombre.length - 1) == 5 || nombre.charAt(nombre.length - 1) == 6)) {
                    resultat = unitediz[nombre.charAt(nombre.length - 1)];
                } else if (chiffre_diz[i] > 1 && nombre.charAt(nombre.length - 1) == 1) {
                    if (chiffre_diz[i] == 7) {
                        resultat = unitediz[nombre.charAt(nombre.length - 1)];
                        resultat = diz[i - 1] + '-et-' + resultat;
                    } else if (chiffre_diz[i] == 8) {
                        resultat = diz[i] + '-' + resultat;
                    } else if (chiffre_diz[i] == 9) {
                        resultat = unitediz[nombre.charAt(nombre.length - 1)];
                        resultat = diz[i - 1] + '-' + resultat;
                    } else {
                        resultat = diz[i] + '-et-' + resultat;
                    }
                } else if (chiffre_diz[i] == 7 && nombre.charAt(nombre.length - 1) > 1) {
                    resultat = unitediz[nombre.charAt(nombre.length - 1)];
                    resultat = diz[i - 1] + '-' + resultat;
                } else if (chiffre_diz[i] == 9 || chiffre_diz[i] == 9 && nombre.charAt(nombre.length - 1) > 1) {
                    resultat = unitediz[nombre.charAt(nombre.length - 1)];
                    resultat = diz[i - 1] + '-' + resultat;
                } else {
                    resultat = diz[i] + ' ' + resultat;
                }
            }
        }
    }

    // FONCTION DE REMPLACEMENT DES CENTAINES
    function remp_cent() {
        for (var i = 0; i <= 9; i++) {
            if (nombre.charAt(nombre.length - 3) == chiffre[i]) {
                resultat = cents[i] + ' ' + resultat;
            }
        }
    }
    // FONCTION DE REMPLACEMENT DES mille
    function remp_mille() {
        for (var i = 0; i <= 9; i++) {
            if (nombre.charAt(nombre.length - 4) == chiffre[i]) {
                resultat = mille[i] + ' ' + resultat;
            }
        }
    }




    //controle que le nombre entré est bien < 1000
    if (nombre > 1999) {
        document.write('Le nombre entré est trop grand<br />');
    } else if (nombre == 0) {
        document.write('J\ai dit plus grand que 0!<br />');
    } else if (!nombre) {
        document.write('Vous n\'avez rien entré !<br />');
    } else if (isNaN(nombre) == true) {
        document.write('Ce n\'est pas un nombre !<br />');
    } else { // on peut démarrer la conversion

        // détection de la structure du chiffre : 1, 2 ou 3 chiffres
        // je converti nombre en string pour le compter
        nombre = nombre.toString();
        // je compte
        if (nombre.length == 1) {
            nbre_chiffres = 1;

            // fonction de remplacement des unités
            remp_unit();

        } else if (nombre.length == 2) {
            nbre_chiffres = 2;

            // fonction de remplacement des unités
            remp_unit();

            // fonction de remplacement des dizaines
            remp_diz();

        } else if (nombre.length == 3) {
            nbre_chiffres = 3;

            // fonction de remplacement des unités
            remp_unit();

            // fonction de remplacement des dizaines
            remp_diz();

            // fonction de remplacement des centaines
            remp_cent();
        } else {
            nbre_chiffres = 4;

            // fonction de remplacement des unités
            remp_unit();

            // fonction de remplacement des dizaines
            remp_diz();

            // fonction de remplacement des centaines
            remp_cent();
            // fonction de remplacement des milles
            remp_mille();
        }



    }


    if (isNaN(nombre) != true && nombre <= 1999 && nombre > 0) {
        //document.write('Votre nombre est ' + nombre + '<br />');
        // document.write('C\'est un nombre à ' + nbre_chiffres + ' chiffres<br />');

        alert(resultat);
    }
}
function test() {
    for (nombre = 1; nombre < 1999; nombre++) {


        var chiffre = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var chiffre_diz = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var chiffre_cent = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var unite = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
        var unitediz = ['', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
        var diz = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
        var cents = ['', 'cent', 'deux cent', 'trois cent', 'quatre cent', 'cinq cent', 'six cent', 'sept cent', 'huit cent', 'neuf cent'];
        var mille = ['', 'mille', 'deux mille', 'trois mille', 'quatre mille', 'cinq mille', 'six mille', 'sept mille', 'huit mille', 'neuf mille'];
        var nbre_chiffres, resultat = 'encore inconnu';

        // FONCTION DE REMPLACEMENT DES UNITES
        function remp_unit() {
            for (var i = 0; i <= 9; i++) {
                if (nombre.charAt(nombre.length - 1) == chiffre[i]) {
                    resultat = unite[i];
                }
            }
        }

        // FONCTION DE REMPLACEMENT DES DIZAINES
        function remp_diz() {
            for (var i = 0; i <= 9; i++) {
                if (nombre.charAt(nombre.length - 2) == chiffre[i]) {
                    //détermination des syntaxes particulières
                    if (chiffre_diz[i] >= 1 && nombre.charAt(nombre.length - 1) == 0) {
                        resultat = diz[i] + resultat;
                    } else if (chiffre_diz[i] == 1 && (nombre.charAt(nombre.length - 1) == 1 || nombre.charAt(nombre.length - 1) == 2 || nombre.charAt(nombre.length - 1) == 3 || nombre.charAt(nombre.length - 1) == 4 || nombre.charAt(nombre.length - 1) == 5 || nombre.charAt(nombre.length - 1) == 6)) {
                        resultat = unitediz[nombre.charAt(nombre.length - 1)];
                    } else if (chiffre_diz[i] > 1 && nombre.charAt(nombre.length - 1) == 1) {
                        if (chiffre_diz[i] == 7) {
                            resultat = unitediz[nombre.charAt(nombre.length - 1)];
                            resultat = diz[i - 1] + '-et-' + resultat;
                        } else if (chiffre_diz[i] == 8) {
                            resultat = diz[i] + '-' + resultat;
                        } else if (chiffre_diz[i] == 9) {
                            resultat = unitediz[nombre.charAt(nombre.length - 1)];
                            resultat = diz[i - 1] + '-' + resultat;
                        } else {
                            resultat = diz[i] + '-et-' + resultat;
                        }
                    } else if (chiffre_diz[i] == 7 && nombre.charAt(nombre.length - 1) > 1) {
                        resultat = unitediz[nombre.charAt(nombre.length - 1)];
                        resultat = diz[i - 1] + '-' + resultat;
                    } else if (chiffre_diz[i] == 9 || chiffre_diz[i] == 9 && nombre.charAt(nombre.length - 1) > 1) {
                        resultat = unitediz[nombre.charAt(nombre.length - 1)];
                        resultat = diz[i - 1] + '-' + resultat;
                    } else {
                        resultat = diz[i] + ' ' + resultat;
                    }
                }
            }
        }

        // FONCTION DE REMPLACEMENT DES CENTAINES
        function remp_cent() {
            for (var i = 0; i <= 9; i++) {
                if (nombre.charAt(nombre.length - 3) == chiffre[i]) {
                    resultat = cents[i] + ' ' + resultat;
                }
            }
        }
        // FONCTION DE REMPLACEMENT DES mille
        function remp_mille() {
            for (var i = 0; i <= 9; i++) {
                if (nombre.charAt(nombre.length - 4) == chiffre[i]) {
                    resultat = mille[i] + ' ' + resultat;
                }
            }
        }




        //controle que le nombre entré est bien < 2000
        if (nombre > 1999) {
            document.write('Le nombre entré est trop grand<br />');
        } else if (nombre == 0) {
            document.write('J\ai dit plus grand que 0!<br />');
        } else if (!nombre) {
            document.write('Vous n\'avez rien entré !<br />');
        } else if (isNaN(nombre) == true) {
            document.write('Ce n\'est pas un nombre !<br />');
        } else { // on peut démarrer la conversion

            // détection de la structure du chiffre : 1, 2 ou 3 chiffres
            // je converti nombre en string pour le compter
            nombre = nombre.toString();
            // je compte
            if (nombre.length == 1) {
                nbre_chiffres = 1;

                // fonction de remplacement des unités
                remp_unit();

            } else if (nombre.length == 2) {
                nbre_chiffres = 2;

                // fonction de remplacement des unités
                remp_unit();

                // fonction de remplacement des dizaines
                remp_diz();

            } else if (nombre.length == 3) {
                nbre_chiffres = 3;

                // fonction de remplacement des unités
                remp_unit();

                // fonction de remplacement des dizaines
                remp_diz();

                // fonction de remplacement des centaines
                remp_cent();
            } else {
                nbre_chiffres = 4;

                // fonction de remplacement des unités
                remp_unit();

                // fonction de remplacement des dizaines
                remp_diz();

                // fonction de remplacement des centaines
                remp_cent();
                // fonction de remplacement des milles
                remp_mille();
            }



        }


        if (isNaN(nombre) != true && nombre <= 1999 && nombre > 0) {
            //document.write('Votre nombre est ' + nombre + '<br />');
            // document.write('C\'est un nombre à ' + nbre_chiffres + ' chiffres<br />');

            console.log(resultat);
        }
    }
}

