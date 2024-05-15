function aggiornaTotale() {
    let importo = parseFloat(document.getElementById('importo').value)
    let conto = localStorage.getItem('contoSelezionato') //prendi conto attualmente selezionato
    let saldo = parseFloat(localStorage.getItem('conto' + conto)) //prendi saldo presente sul conto
    if (saldo - importo < 0) {
        alert("Operazione non possibile. Saldo insufficiente!")
    } else {
        alert("Operazione andata a buon fine!")
        saldo -= importo
        localStorage.setItem('conto' + conto, saldo)
    }


}