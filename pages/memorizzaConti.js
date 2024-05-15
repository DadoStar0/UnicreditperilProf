let contaConti = localStorage.getItem('nconti'); //contatore per ogni conto
        let contoSelezionato = localStorage.getItem('contoSelezionato'); //conto attualmente in uso

        function aggiorna() {
            for (i = 1; i <= contaConti; i++) {
                if(localStorage.getItem('conto'+i)!=null){
                    let conto = 'conto' + i
                    let contoHTML = '<div class="border border-danger w-50 h-50 h2 align-self-center p-5" id="conto' + i + '">' +
                        '<h3 class="m-2 text-center text-secondary" id="titoloConto' + i + '">Conto ' + i + ' <span id="inUso' + i + '">(In uso)</span>' +'</h3>' +
                        '<p class="m-2 text-center">€' + localStorage.getItem(conto) + ',00</p>' +
                        '<div class="d-flex flex-row justify-content-center p-2 gap-4">' +
                        '<button class="btn btn-danger btn-xl p-3" id="' + i + '" onclick="rimuoviConto(this.id);" href="#">Elimina conto</button>' +
                        '<button class="btn btn-primary btn-xl p-3" id="' + i + '" onclick="selezionaConto(this.id);" href="#">Seleziona conto</button>' +
                        '</div>' +
                        '</div>';
                    document.getElementById('containerConti').innerHTML += contoHTML
                    if (contoSelezionato == i) {
                        let selezionare = document.getElementById('titoloConto' + i);
                        selezionare.classList.remove("text-secondary"); //cambio colore del testo
                        selezionare.classList.add("text-primary");
                    } else {
                        document.getElementById('inUso' + i).style.display = "none";
                    }
                }
            }
        }

        function aggiungiConto() {
            contaConti++;
            let soldi = prompt("Inserire disponibilità iniziale: "); //soldi presenti sul conto che si vuole aggiungere

            let conto = '<div class="border border-danger w-50 h-50 h2 align-self-center p-5" id="conto' + contaConti + '">' +
                '<h3 class="m-2 text-center text-primary" id="titoloConto' + contaConti + '">Conto ' + contaConti + ' <span id="inUso' + contaConti + '">(In uso)</span>' + '</h3>' +
                '<p class="m-2 text-center">€' + soldi + ',00</p>' +
                '<div class="d-flex flex-row justify-content-center p-2 gap-4">' +
                '<button class="btn btn-danger btn-xl p-3" id="' + contaConti + '" onclick="rimuoviConto(this.id);" href="#">Elimina conto</button>' +
                '<button class="btn btn-primary btn-xl p-3" id="' + contaConti + '" onclick="selezionaConto(this.id);" href="#">Seleziona conto</button>' +
                '</div>' +
                '</div>';
            localStorage.setItem('conto' + contaConti, soldi) //aggiungi in memoria il conto
            document.getElementById('containerConti').innerHTML += conto //aggiunta del conto alla pagina
            localStorage.setItem('nconti', contaConti)
            localStorage.setItem('contoSelezionato', contaConti)
            if (contaConti > 1) {
                selezionaConto(contaConti)
            }
            contoSelezionato = contaConti;

        }
        function rimuoviConto(nConto) {
            if (contoSelezionato == nConto) {
               alert("Non puoi rimuovere il conto attualmente in uso!")
               return
            } //se il conto attualmente in uso viene eliminato
            document.getElementById('conto' + nConto).remove(); //rimuovi il conto dalla pagina
            localStorage.removeItem('conto' + nConto)
            contaConti--
            contaConti = localStorage.getItem('nconti') //decremento contatore
            localStorage.setItem('nconti', contaConti); //contatore per ogni conto
        }
        function selezionaConto(nConto) {
            let selezionato = document.getElementById('titoloConto' + contoSelezionato); //prende elemento html del conto selezionato
            let selezionare = document.getElementById('titoloConto' + nConto);//prende elemento html del conto da selezionare
            selezionato.classList.remove("text-primary"); //cambio colore del testo
            selezionato.classList.add("text-secondary");
            document.getElementById('inUso' + contoSelezionato).style.display = "none"; //rimozione scritta "in uso"
            localStorage.setItem('contoSelezionato', nConto)
            selezionare.classList.remove("text-secondary"); //cambio colore del testo
            selezionare.classList.add("text-primary");
            document.getElementById('inUso' + nConto).style.display = "inline"; //aggiunta scritta "in uso"
            contoSelezionato = nConto;
        }