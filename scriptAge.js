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