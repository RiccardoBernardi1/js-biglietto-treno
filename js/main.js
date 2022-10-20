// 1. chiedere all'utente i km da percorrere 
const km= Number( prompt ("Quanti chilometri devi percorrere?") );
// 2. chiedere all'utente l'eta del passeggero 
const age= Number( prompt ("Quanti anni hai?") );
// 3. calcolare il prezzo standard del biglietto 
let price= (km*0.21);
// 4. verificare se il passeggero sia minorenne e abbia quindi diritto ad un 20% sconto
// 5. verificare se il passegero sia ultrasessantacinquenne e abbia quindi diritto ad un 40% sconto
// 6. calcolare il prezzo finale 
// 7. mostrare a schermo il prezzo finale con massimo due decimali 