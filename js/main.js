// Biglietto del treno

// Tariffa: 0.21 € al km

// Prompt: Chilomentri da percorrere
// Prompt: Età del passeggero
// Prezzo del biglietto: Chilomentri da percorrere * 0.21
// Se Età del passeggero < 18, applica 20% di sconto e procedi al pagamento
// Altrimenti se Età del passeggero > 65, applica 40% di sconto e procedi con il pagamento
// Altrimenti procedi al pagamento

var tariffa = 0.21;

var kmDaPercorrere = prompt('Quanti chilometri dovrai percorrere?')
if (isNaN(kmDaPercorrere)) {
    alert('Non hai inserito un numero. Ricarica la pagina perchè ancora non abbiamo studiato i cicli ed inserisci un valore corretto.');
    console.log('Non hai inserito un numero. Ricarica la pagina perchè ancora non abbiamo studiato i cicli ed inserisci un valore corretto.');
}

var etaPasseggero = prompt('Quanti anni hai?');
if (isNaN(kmDaPercorrere)) {
    alert('Non hai inserito un numero. Ricarica la pagina perchè ancora non abbiamo studiato i cicli ed inserisci un valore corretto.');
    console.log('Non hai inserito un numero. Ricarica la pagina perchè ancora non abbiamo studiato i cicli ed inserisci un valore corretto.');
}

var prezzoBiglietto = kmDaPercorrere * tariffa;

if (etaPasseggero < 18) {
    scontoMinorenni = (prezzoBiglietto / 100) * 20;
    prezzoBiglietto = prezzoBiglietto - scontoMinorenni;
    console.log(
        'Complimenti, hai diritto allo sconto del 20% grazie alla nostra tariffa \'Under 18\'. ' +
        'Il prezzo del biglietto è di ' + prezzoBiglietto + ' €'
    );
    document.getElementById('biglietto').innerHTML = 'Complimenti, hai diritto allo sconto del 20% grazie alla nostra tariffa \'Under 18\'. ' +
    'Il prezzo del biglietto è di ' + prezzoBiglietto + ' €';

} else if (etaPasseggero >= 65) {
    scontoOver = (prezzoBiglietto / 100) * 40;
    prezzoBiglietto = prezzoBiglietto - scontoOver;
    console.log(
        'Complimenti, hai diritto allo sconto del 40% grazie alla nostra tariffa \'Over 65\'. ' +
        'Il prezzo del biglietto è di ' + prezzoBiglietto + ' €'
    );
    document.getElementById('biglietto').innerHTML = 'Complimenti, hai diritto allo sconto del 40% grazie alla nostra tariffa \'Over 65\'. ' +
    'Il prezzo del biglietto è di ' + prezzoBiglietto + ' €';

} else {
    console.log('Il prezzo del biglietto è di ' + prezzoBiglietto + ' €');
    document.getElementById('biglietto').innerHTML = 'Il prezzo del biglietto è di ' + prezzoBiglietto + ' €';
}
