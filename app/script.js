
$(document).ready(function(){

    $("#add-element").keydown(function(){
        if (event.which == 13 || event.KeyCode == 13) {
            // 1 STEP - prendiamo il valore
            var valore = $("#add-element").val();
            var newData = new Date();
            // 2 STEP - CREO CLONE DEL VALORE
            var clona = $(".template .message").clone();
            // 3 STEP - aggiungo la classe
            clona.addClass("sent");
            // 4 STEP - inserimento del testo
            clona.find(".message-text").append(valore);
            clona.find(".message-time").append(newData.getHours()+" " + newData.getMinutes());
            // 5 STEP - inserimento nel DOM
            $(".message1").append(clona);
            // 6 STEP - risposta automatica
            setTimeout(rispostaAutomatica,2000);
            // 7 STEP
            $("#add-element").val("");
            }
    });


});

function rispostaAutomatica() {
    // 1 step - creazione di un array con risposte random
    var risposte = [
        "Questo è un Bot automatico",
        "Tutto ok",
        "Ci vediamo presto",
        "Dove andiamo a fare aperitivo?",
        "Ci vediamo a fine Agosto",
        "Oggi è veramente una giornata molto calda",
    ];

    // 2 step - creazione risposte Random
    var risposteRandom = generaRandom(0, risposte.length-1);
    var elemento = $(".template .message").clone()
    var newData = new Date();
    // 2 step - aggiungere una classe
    elemento.addClass("received").remove("sent");
    // 3 step - aggiungere il testo
    elemento.find(".message-text").append(risposte[risposteRandom]);
    elemento.find(".message-time").append(newData.getHours()+" " + newData.getMinutes());
    // 4 step - inserimento nel DOM
    $(".message1").append(elemento);
    $("#add-element").val("");


};


function generaRandom(min,max){
        return Math.floor(Math.random()*(max - min + 1) + min);
    }


// Secondo assegnazione: Fare apparire il nome
// sopra al click del contatto a sinistra

$(".contact").click(function(){
    var av = $(this).index();
    // console.log(av);
    var nome = $(".contact .ultimo_accesso h4").eq(av).text();
    var imagine = $(".contact img").eq(av).attr("src")
    console.log(imagine);
    $(".avatar2 .ultimo_accesso_x h4").html(nome);
    $(".avatar2 img").attr("src",imagine);


});
