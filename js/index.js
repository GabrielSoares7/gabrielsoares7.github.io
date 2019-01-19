var rest = [];
var indexTable = 0;


for(i = 1; i <= 75; i++) {
    rest[i - 1] = {sorteado:false, valor:i};
}

function interp(evt) {
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    if(key == 13) {
        start();
    }
}

function start() {
    index = Math.floor(Math.random() * rest.length);
    while(rest[index].sorteado) {
        index++;
        if(index > 74)
            index = 0;
    }

    $("#div-num").text(rest[index].valor);
    rest[index].sorteado = true;
    $("#td"+indexTable).text(rest[index].valor);
    indexTable++;
}
