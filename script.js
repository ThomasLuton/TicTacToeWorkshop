var scoreX = 0;
var scoreO = 0;

function verify(){
    const game = document.getElementsByClassName('case');

    //verif ligne 1
    if(game[0].innerHTML==game[1].innerHTML && game[0].innerHTML==game[2].innerHTML && game[0].innerHTML=="X"){
        victoireX();
    }
    if(game[0].innerHTML==game[1].innerHTML && game[0].innerHTML==game[2].innerHTML && game[0].innerHTML=="O"){
        victoireO();
    }

    //verif ligne 2
    if(game[3].innerHTML==game[4].innerHTML && game[3].innerHTML==game[5].innerHTML && game[3].innerHTML=="X"){
        victoireX;
    }
    if(game[3].innerHTML==game[4].innerHTML && game[3].innerHTML==game[5].innerHTML && game[3].innerHTML=="O"){
        victoireO;
    }
    
    //verif ligne 3
    if(game[6].innerHTML==game[7].innerHTML && game[6].innerHTML==game[8].innerHTML && game[6].innerHTML=="X"){
        victoireX();
    }
    if(game[6].innerHTML==game[7].innerHTML && game[6].innerHTML==game[8].innerHTML && game[6].innerHTML=="O"){
        victoireO();
    }

    //verif colonne 1
    if(game[0].innerHTML==game[3].innerHTML && game[0].innerHTML==game[6].innerHTML && game[0].innerHTML=="X"){
        victoireX();
    }
    if(game[0].innerHTML==game[3].innerHTML && game[0].innerHTML==game[6].innerHTML && game[0].innerHTML=="O"){
        victoireO();
    }

    //verif colonne 2
    if(game[1].innerHTML==game[4].innerHTML && game[1].innerHTML==game[7].innerHTML && game[1].innerHTML=="X"){
        victoireX();
    }
    if(game[1].innerHTML==game[4].innerHTML && game[1].innerHTML==game[7].innerHTML && game[1].innerHTML=="O"){
        victoireO();
    }

    //verif colonne 3
    if(game[2].innerHTML==game[5].innerHTML && game[2].innerHTML==game[8].innerHTML && game[2].innerHTML=="X"){
        victoireX();
    }
    if(game[2].innerHTML==game[5].innerHTML && game[2].innerHTML==game[8].innerHTML && game[2].innerHTML=="O"){
        victoireO();
    }

    //verif diago 1
    if(game[0].innerHTML==game[4].innerHTML && game[0].innerHTML==game[8].innerHTML && game[0].innerHTML=="X"){
        victoireX;
    }
    if(game[0].innerHTML==game[4].innerHTML && game[0].innerHTML==game[8].innerHTML && game[0].innerHTML=="O"){
        victoireO;
    }

    //verif diago 2
    if(game[2].innerHTML==game[4].innerHTML && game[2].innerHTML==game[6].innerHTML && game[2].innerHTML=="X"){
        victoireX();
    }
    if(game[2].innerHTML==game[4].innerHTML && game[2].innerHTML==game[6].innerHTML && game[2].innerHTML=="O"){
        victoireO();
    }

}


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
    age = "chaine de caractère";
    var ageInt = parseInt(age);
    if(ageInt < 18){
        document.getElementById('condition').innerHTML = 'Tu es mineur !';
    }else{
        document.getElementById('condition').innerHTML = 'Tu es majeur !';
    }
}

