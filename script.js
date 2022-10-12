var scoreX = 0;
var scoreO = 0;

function clearBoard(){
    const test = document.getElementsByClassName('case');
    for(var i = 0; i<test.length; i++){
        test[i].innerHTML = "";
    }
}
function result(score1, score2){
    if(score1 > score2){
        document.getElementById("result").innerHTML = "Joueur X est en tête !"
    }else if(score1 < score2){
        document.getElementById("result").innerHTML = "Joueur O est en tête !"
    }else{
        document.getElementById("result").innerHTML = "Egalité !"
    }
}
function victoireX(){
    
    scoreX++;
    document.getElementById("joueurX").innerHTML = 'Joueur X : '+ scoreX +  ' point(s) !';
    clearBoard();
    result(scoreX, scoreO);
}
function victoireO(){
    scoreO++;
    document.getElementById("joueurO").innerHTML = 'Joueur O : '+ scoreO +  ' point(s) !';
    clearBoard();
    result(scoreX, scoreO);
}

function nul(){
    clearBoard();
}

function menuDeroulant(){
    var menu = document.getElementById('menu');
    if(menu.style.display == 'none'){
        menu.style.display = "contents";
    }else{
        menu.style.display = 'none';
    }
    
}

function ageControl(){
    var age = document.getElementById('age').value;
    //J'utilise parseInt car 'value' renvoie une chaine de caractère et non un nombre entier
    // car sinon age pourrait avoir la forme => 
    // age = "chaine de caractère";
    var ageInt = parseInt(age);
    if(ageInt < 18){
        document.getElementById('condition').innerHTML = 'Tu es mineur !';
    }else{
        document.getElementById('condition').innerHTML = 'Tu es majeur !';
    }
}