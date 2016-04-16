//var s = 'foo ,quoted, bar';
//var m = s.match(/,(.*?),/);
//alert(m[1]); // m[1] = quoted


$(document).ready(function(){
    $("#sopa").hide();
    var max = 1;
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




        return false;
    });
});
