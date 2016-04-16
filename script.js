//var s = 'foo ,quoted, bar';
//var m = s.match(/,(.*?),/);
//alert(m[1]); // m[1] = quoted


$(document).ready(function(){
    $("#sopa").hide();
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
        array = arrayU
        /*Creació Taula*/
        var partida = new Partida(array);

        partida.createTable(max,max);

        /*Joc*/
        $("tr td").click(function (e) { //function_td
            $(this).css("background-color", "orange");
            paraulaSelec = paraulaSelec.concat($(this).text());
            console.log(paraulaSelec);
            e.stopPropagation();
        });

        return false;
    });
});
