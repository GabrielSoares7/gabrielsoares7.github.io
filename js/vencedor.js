js = JSON.parse(localStorage.getItem("jogadores"));

function apertaTecla (evt) {

}

function esconder() {
}

function mostrar() {
    audio = document.getElementById("audioVencedor");
    audio.play();


    // #GAMBIARRA
    setTimeout(function(){
        audio.volume = 0.8;
        setTimeout(function() {
            audio.volume = 0.6;
            setTimeout(function() {
                audio.volume = 0.4;
                setTimeout(function() {
                    audio.volume = 0.2;
                    setTimeout(function() {
                        audio.volume = 0.1;
                        setTimeout(function() {
                            audio.volume = 0.05;
                            setTimeout(function() {
                                audio.volume = 0;
                            }, 10000);
                        }, 9500);
                    }, 8500);
                }, 7500);
            }, 5000);
        }, 5000);
    }, 10000);
}
