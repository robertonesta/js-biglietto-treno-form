/*scrivere un programma che chieda all’utente:

- Il numero di chilometri da percorrere;
- Età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

const submitbutton = document.getElementById("submit");

submitbutton.addEventListener('click', function(){
    const namesurname = document.getElementById("namesurname")
    const kilometers = Number(document.querySelector('input[name="km"]').value);
    const age = document.getElementById("age").value;

let ticketprice = (kilometers * 0.21).toFixed(2);
console.log (`ticket price: €${ticketprice}`)

const minorsprice = (ticketprice * 0.8).toFixed(2);
const over65price = (ticketprice * 0.6).toFixed(2);

if (age < 18) {
    ticketprice = minorsprice;
    console.log (`Il tuo prezzo col 20% di sconto: €${minorsprice}`);
} else if (age >=65) {
    ticketprice = over65price;
    console.log (`Il tuo prezzo col 40% di sconto: €${over65price}`);
}
else{
    console.log (`Il tuo prezzo: €${ticketprice}`)
}


document.getElementById("passenger").innerText = namesurname.value;
document.getElementById("carriage_number").innerText = Math.floor(Math.random() * 10) + 1;
document.getElementById("cp_code").innerText = Math.floor(Math.random() * 100000) + 1;
document.getElementById("ticketprice").innerText = ticketprice.value;
}) 

