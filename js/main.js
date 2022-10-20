// 1. chiedere all'utente i km da percorrere 
const km= Number( prompt ("Quanti chilometri devi percorrere?") );
// 2. chiedere all'utente l'eta del passeggero 
const age= Number( prompt ("Quanti anni hai?") );
// 3. calcolare il prezzo standard del biglietto 
let price= (km*0.21);
// 4. verificare se il passeggero sia minorenne e abbia quindi diritto ad un 20% sconto o sia ultrasessantacinquenne e abbia quindi diritto ad un 40% sconto
if ( !(km<=0||km>10000||age<0||age>150) ){
    if (age<18){
        price= ( price-(price*0.2) );
        document.getElementById("discount").innerHTML= "Sconto minorenni : " +parseFloat(price*0.2).toFixed(2)+"€";
    }else if (age>=65){
        price= ( price-(price*0.4) );
        document.getElementById("discount").innerHTML= "Sconto over 65 : "+parseFloat(price*0.2).toFixed(2)+"€";
    }else {
        document.getElementById("discount").style.visibility = "hidden";
    }
}else {
    alert("Hai inserito un età e/o numero di chilometri non valido, la pagina sarà ricaricata")
    location.reload()
}
// 5. mostrare a schermo il prezzo finale con massimo due decimali 
document.getElementById("final-price").innerHTML= parseFloat(price).toFixed(2)+"€"; 