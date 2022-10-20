// 1. chiedere all'utente i km da percorrere 
const km= Number( prompt ("Quanti chilometri devi percorrere?") );
// 2. chiedere all'utente l'eta del passeggero 
const age= Number( prompt ("Quanti anni hai?") );
// 3. calcolare il prezzo standard del biglietto 
let price= (km*0.21);
// 4. verificare se il passeggero sia minorenne e abbia quindi diritto ad un 20% sconto o sia ultrasessantacinquenne e abbia quindi diritto ad un 40% sconto
if (age<18){
    price= ( price-(price*0.2) );
}else if (age>=65){
    price= ( price-(price*0.4) );
}
// 5. mostrare a schermo il prezzo finale con massimo due decimali 
document.querySelector("h2").innerHTML="Questo è il prezzo del tuo biglietto:"+parseFloat(price).toFixed(2)+"€"; 