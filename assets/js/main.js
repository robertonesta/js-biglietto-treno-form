/*scrivere un programma che chieda all’utente:

- Il numero di chilometri da percorrere;
- Età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

const submitbutton = document.getElementById("submit");

submitbutton.addEventListener('click', function(){
    const kilometers = Number(document.querySelector('input[name="km"]').value);
const userAge = document.getElementById("età").value;

const CostPerKm = 0.21;

let Price = kilometers * CostPerKm;


}) 