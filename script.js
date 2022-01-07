let rec;
let showingHelp = false;

if (!("webkitSpeechRecognition" in window)) {
    var tts = new SpeechSynthesisUtterance("Hola! Parece que hay un error en tu navegador y/o microfono y no puedes usarme, lo lamento");

    tts.pitch = 1.0;
    tts.rate = 1.0;
    tts.lang = "es-AR";

    speechSynthesis.speak(tts);
    document.getElementById("text").innerHTML = `
        Hola! Parece que hay un error en tu navegador y/o microfono y no puedes usarme, lo lamento
    `
}else{
    rec = new webkitSpeechRecognition();
    rec.lang = "es-AR";
    rec.continuos = true;
    rec.interim = true;
    rec.addEventListener('result', start);

    let message = true;
    document.getElementById("bodyPage").addEventListener('mouseenter', function() {
        if (message == true) {
            var tts = new SpeechSynthesisUtterance("Hola! Soy Mora, tu asistente virtual web, estoy aki para lo que haga falta, Presiona el boton Hablar, para empezar a usarme correctamente");

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);
            message = false;
        }
    })
    document.getElementById("text").innerHTML = `
        Hola! Soy Mora, tu asistente virtual web, estoy aqui para lo que haga falta, Presiona el boton "Hablar", para empezar a usarme correctamente
    `

}

function start(event) {

    for (i = event.resultIndex; i < event.results.length; i++) {

        let results = event.results[i][0].transcript;
        let message;
        console.log(results);
        if (results.includes("Hola")) {
            let saludos = ["Holaaa!", "Que tal??", "Todo bien??", "Buenos dias, tardes o noches"]
            message = saludos[Math.floor(Math.random() * saludos.length)];
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-ES";

            speechSynthesis.speak(tts);
        }else if (results.includes('Buscar en YouTube')) {
            let search = results.slice(18, 40);
            if (search == "") {
                message = "Disculpa, no te he entendido, repitelo";
                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

                speechSynthesis.speak(tts);
                document.getElementById('text').innerHTML = message;
                window.open(link);
            }
            let link = "https://www.youtube.com/results?search_query=" + search;
            message = "He encontrado esto en Youtube sobre " + search + ", espero que sea lo que buscas";
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);
            window.open(link);

        }else if (results.includes("Buscar en Spotify")) {
            let search = results.slice(18, 40);
            if (search == "") {
                message = "Disculpa, no te he entendido, repitelo";
                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

                speechSynthesis.speak(tts);
                document.getElementById('text').innerHTML = message;
                window.open(link);
            }
            let link = "https://open.spotify.com/search/" + search;
            message = "He encontrado esto en Spotify sobre " + search + ", espero que sea lo que buscas";
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);
            window.open(link);

        }else if (results.includes("quién eres") || results.includes("Cuál es tu nombre")) {

            message = "Soy Mora, tu asistente virtual web, estoy aki para lo que haga falta";
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);

        }else if (results.includes("de dónde eres")) {

            message = "Soy de argentina gato, me programaron ai, finjo el español neutro xdd";
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);

        }else if (results.includes("cuál es tu edad")){

            message = "Supongo que en años reales tengo menos de 1 año, pero mi edad en años no reales es 24, la eleji yo misma :)";
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);

        }else if (results.includes("Qué día es")) {

            let now = new Date();
            let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
            let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            message = "Hoy es " + days[now.getDay()-1] + " " + now.getDate() + " de " + months[now.getMonth()] + " de " + now.getFullYear();
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);
            message = "Hoy es " + days[now.getDay()-1] + " " + now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
        }else if (results.includes("qué hora es")){

            let now = new Date();
            message = "Son las" + now.getHours() + " y " + now.getMinutes();
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);
            message = "Son las " + now.getHours() + ":" + now.getMinutes();
        }else if (results.includes("Cuéntame un chiste")){

            let jokes = ["¿Sabes que les pasa a los programadores cuando mueren?, son almacenados en la nube jaja",
            "Habia un patito que respiraba por el culo, se sento... y fallecio :(",
             "Una mesa porfavor. ¿Parados?. No estupido, con sillas", "¿Como maldice un pollo a otro pollo? ¡Caldito seas!",
            "¿Por que se suicido el libro de matematicas? Porque tenia muchos problemas"]
            message = jokes[Math.floor(Math.random() * jokes.length)];
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);

        }else if (results.includes("Llévame a un sitio aleatorio")){

            let messages = ["Aki tienes un sitio aleatorio, disfruta", "¡Marchando!", "Diviertete!", "Espero te guste mucho"];
            let urls = ["https://skeletoos57.github.io/randomcolor", "https://skeletoos57.github.io/islove", "https://drawing.garden/", "http://corndog.io/", "https://thatsthefinger.com/", "https://heeeeeeeey.com/", "https://onesquareminesweeper.com/"];
            message = messages[Math.floor(Math.random() * messages.length)];
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);
            window.open(urls[Math.floor(Math.random() * urls.length)]);

        }else if (results.includes("decí") || results.includes("Desi")){

            let messageToSay = results.slice(4, 40);
            message = messageToSay;
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);

        }else{

            message = "Disculpa, no te entendi";
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);

        }

        document.getElementById('text').innerHTML = message;
    }
}

