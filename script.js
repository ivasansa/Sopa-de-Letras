//var s = 'foo ,quoted, bar';
//var m = s.match(/,(.*?),/);
//alert(m[1]); // m[1] = quoted


$(document).ready(function(){
    $("#sopa").hide();
    $("#llistaParaules").hide();
    var max = 1;
    var paraulaSelec = "";
    $("form").submit(function(){
        var array;
        array = $('#in').val().split(",");
        var arrayU = array;
        //Miremos cuál es la palabra más larga
        $.each(array,function(i){
            arrayU[i] = array[i].toUpperCase();
           if(array[i].length>max){
               max = array[i].length;
           }
        });

        $("form").hide();
        $("#sopa").show();
        $("#llistaParaules").show();

        array = arrayU
        /*Creació Taula*/
        var partida = new Partida(array);

        partida.createTable(max,max);

        /*Joc*/
        $("tr td").click(function (e) { //function_td
            $(this).attr(({class:"seleccionat"})).css("background-color", "orange");
            paraulaSelec = paraulaSelec.concat($(this).text());
            if(partida.paraules.indexOf(paraulaSelec) != -1 ){
                console.log("trobat");
                paraulaSelec = "";
                partida.paraulesJoc -= 1;
                $("#pJ").removeData();
                $("#pJ").text("Nº Paraules: "+partida.paraulesJoc);
                $(".seleccionat").css("background-color", "#00e500");
            }
            if(partida.paraulesJoc <= 0){
                location.reload();
                alert("Has guanyat!");
            }
            console.log(paraulaSelec);
            e.stopPropagation();
        });

        return false;
    });
});
