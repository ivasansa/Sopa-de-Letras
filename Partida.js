// Constructor
function Partida(paraules) {
    this.paraules = paraules;
    this.lletres = "ABCDEFGHIJKLMÑOPQRSTUVWXYZ";
    this.paraulesJoc = 0;

    this.createTable = function(maxRows, maxCols) {
        mytable = $('<table></table>').attr({id: "basicTable"});
        var rows = maxRows * 2;
        var cols = maxCols * 2;
        var tr = [];
        for (var i = 0; i < rows; i++) {
            var row = $('<tr></tr>').attr({id: [i].join(' ')}).appendTo(mytable);
            for (var j = 0; j < cols; j++) {
                $('<td></td>').text(this.lletres[Math.floor(Math.random() * 26)]).attr({id: [j].join(' ')}).appendTo(row);
            }

        }
        mytable.appendTo("#sopa");

        var pJ = 0;
        var pC = 0;
        var colP = [];
        var filP = [];
        do{
            $.each(paraules, function (i) {

                var posX = Math.floor(Math.random() * cols);
                var posY = Math.floor(Math.random() * rows);

                if(((maxCols - posX) >= paraules[i].length) && (filP.indexOf(posY) == -1)){ //entra si cabe y no es una fila "prohibida"
                    var pI = true;
                    for (var j = 0; j < paraules[i].length; j++) {
//                        console.log($('tr:nth-of-type('+(posY + 1)+') td:nth-of-type('+(posX + 1 + j)+')').attr("class"));
                        if(($('tr:nth-of-type('+(posY + 1)+') td:nth-of-type('+(posX + 1 + j)+')').attr("class")==false)||($('tr:nth-of-type('+(posY + 1)+') td:nth-of-type('+(posX + 1 + j)+')').attr("class")==undefined)){
                            $('tr:nth-of-type('+(posY + 1)+') td:nth-of-type('+(posX + 1 + j)+')').attr({class: "untouchable"}).text(paraules[i].charAt(j)).css("color","red");
                        }else{
//                            console.log("nope");
                            pI = false;
                        }
                        filP.push(posY);
                    }
                    if(pI)pC += 1;
                    pJ += 1;
                } else if(((maxRows - posY) >= paraules[i].length ) && (colP.indexOf(posX) == -1)){
                    var pI = true;
                    for (var j = 0; j < paraules[i].length; j++) {
//                        console.log($('tr:nth-of-type('+(posY + 1)+') td:nth-of-type('+(posX + 1 + j)+')').attr("class"));
                        if(($('tr:nth-of-type('+(posY + 1 + j)+') td:nth-of-type('+(posX + 1)+')').attr("class")==false)||($('tr:nth-of-type('+(posY + 1 + j)+') td:nth-of-type('+(posX + 1)+')').attr("class")==undefined)){
                            $('tr:nth-of-type('+(posY + 1 + j)+') td:nth-of-type('+(posX + 1)+')').attr({class: "untouchable"}).text(paraules[i].charAt(j)).css("color","red");
                        }else{
                            pI = false;
//                            console.log("nope");
                        }
                        filP.push(posX);
                    }
                    if(pI)pC += 1;
                    pJ += 1;
                }

    //            if (this.paraules[i].length > max) {
    //                max = array[i].length;
    //            }
            });
        }while(pJ < this.paraules.length);
        this.paraulesJoc = pC;
        $("#llistaParaules").append("<p id='pJ'>Nº Paraules: "+this.paraulesJoc+"</p>");
    }



}
//        function getRandomInt(min, max) {
//            return Math.floor(Math.random() * (max - min + 1) + min);
//        }
//
//        var computerResponse = getRandomInt(1, 4);
//        if(computerResponse == 1){
//            this.pos = {"x":2, "y": 2};
//            this.oldPos = {"x":2, "y": 2};
//        }else if(computerResponse == 2){
//            this.pos = {"x":2, "y": 17};
//            this.oldPos = {"x":2, "y": 17};
//        }else if(computerResponse == 3){
//            this.pos = {"x":17, "y": 17};
//            this.oldPos = {"x":17, "y": 17};
//        }else{
//            this.pos = {"x":17, "y": 2};
//            this.oldPos = {"x":17, "y": 2};
//        }
//        /*COLOR*/
//        function getRandomColor() {
//            var letters = '0123456789ABCDEF'.split('');
//            var color = '#';
//            for (var i = 0; i < 6; i++ ) {
//                color += letters[Math.floor(Math.random() * 16)];
//            }
//            return color;
//        }
//        this.color = getRandomColor();

