let rec;
let showingHelp = false;
let randomnum;
let name;
let inSituation;
let phrase;

body = document.getElementById("bodyPage");
help = document.getElementById('help');
options = document.getElementById('options');
talk = document.getElementById('startListener');
buttonSay = document.getElementById('startText');
inputSay = document.getElementById('textInput');
text = document.getElementById('text');

letters = ['A', 'B', 'C', 'D', 'E', 'F',
           'G', 'H', 'I', 'J', 'K', 'L',
           'M', 'N', 'Ñ', 'O', 'P', 'Q',
           'R', 'S', 'T', 'U', 'V', 'W',
           'X', 'Y', 'Z'];

function generateColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

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
            var tts = new SpeechSynthesisUtterance("Hola! Soy Mora, tu asistente virtual web, estoy aki para lo que haga falta, Presiona el botón Hablar, para empezar a usarme correctamente");

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

        let speed = document.getElementById("speed").value;
        let pitch = document.getElementById("pitch").value;
        let volume = 0.1 * document.getElementById("volume").value;

        if (volume > 10) {
            message = "El volumen debe ser menor a 10";
            var tts = new SpeechSynthesisUtterance(message);

            tts.pitch = 1.0;
            tts.rate = 1.0;
            tts.lang = "es-AR";

            speechSynthesis.speak(tts);
            document.getElementById("text").innerHTML = `
                El volumen debe ser menor a 10
            `
        }else{

            let results = event.results[i][0].transcript;
            let message;
            console.log(results);
            if (results.includes("Hola")) {
                if (name != undefined) {
                    let saludos = ["Holaaa, " + name + "!", "Que tal, " + name + "??", "Todo bien, " + name + "??", "Buenos dias, tardes o noches " + name]
                    message = saludos[Math.floor(Math.random() * saludos.length)];
                    var tts = new SpeechSynthesisUtterance(message);

                    tts.pitch = pitch;
                    tts.rate = speed;
                    tts.volume = volume;
                    tts.lang = "es-ES";

                    speechSynthesis.speak(tts);
                }else{
                    let saludos = ["Holaaa!", "Que tal??", "Todo bien??", "Buenos dias, tardes o noches"]
                    message = saludos[Math.floor(Math.random() * saludos.length)];
                    var tts = new SpeechSynthesisUtterance(message);

                    tts.pitch = pitch;
                    tts.rate = speed;
                    tts.volume = volume;
                    tts.lang = "es-ES";

                    speechSynthesis.speak(tts);
                }
            }else if (results.includes("me gusta")){
                let saludos = ["¿Enserio? A mi tambien me encanta", "Si, esta bueno/a", "Nah, no estoy de acuerdo", "Prefiero otras cosas"];
                message = saludos[Math.floor(Math.random() * saludos.length)];
                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-ES";

                speechSynthesis.speak(tts);
            }else if (results.includes("Tengo") || results.includes("tengo")) {

                let age = results.slice(5, 40);
                if (age > 60) {
                    message = "¿Como comprendes como usar esto? Me parece increible, por mas gente de edad avanzada con conocimientos, muy bien viejo/a;";
                }else if (age >= 40) {
                    message = "Me encanta hablar con boomers, me caes bien";
                }else if (age >= 30) {
                    message = "Me encanta hablar con jovenes, crack"
                }else if (age >= 20) {
                    message = "Eres joven";
                }else if (age >= 10) {
                    message = "Impresionante que manejes esto con esa edad como su propio desarrollador, muy bien";
                }else if (age >= 5) {
                    message = "Que- COMO?!";
                }else{
                    message = "Disculpa, no te entendi";
                }

                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

                speechSynthesis.speak(tts);

            }else if (results.includes("Mi nombre es")) {

                name = results.slice(12, 40);
                let answers = ["Me encanta ese nombre", "Esta bien, no esta mal tu nombre", "Lindo nombre", "Mucho gusto", "No me gusta"]
                message = name + ", " + answers[Math.floor(Math.random() * answers.length)];
                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

                speechSynthesis.speak(tts);

            }else if (results.includes("decí") || results.includes("Desi")){

                let messageToSay = results.slice(4, 250);
                message = messageToSay;
                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

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

            }else if (results.includes('Buscar en Google')) {
                let search = results.slice(16, 40);
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
                let link = "https://www.google.com/search?q=" + search;
                message = "He encontrado esto en Google sobre " + search + ", espero que sea lo que buscas";
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

            }else if (results.includes("Buscar en Wikipedia")) {
                let search = results.slice(20, 40);
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
                let link = "https://es.wikipedia.org/wiki/" + search;
                message = "He encontrado esto en Wikipedia sobre " + search + ", espero que sea lo que buscas";
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

            }else if (results.includes("Juguemos a adivinar un número")){

                message = "Muy bien! Acabo de elejir un numero aleatorio del 0 al 10. Intenta adivinar diciendo 'El numero es ...'";
                randomnum = Math.floor(Math.random() * 10);
                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-ES";

                speechSynthesis.speak(tts);

            }else if (results.includes("el número es")) {

                let posible = results.slice(13, 40);
                if (randomnum == undefined) {
                    message = "Tienes que iniciar el juego, di 'Juguemos a adivinar un número' para empezar";
                    var tts = new SpeechSynthesisUtterance(message);

                    tts.pitch = 1.0;
                    tts.rate = 1.0;
                    tts.lang = "es-AR";

                    speechSynthesis.speak(tts);
                }else{
                    if (posible > 10) {
                        message = "Eleji un numero menor a 10";
                        var tts = new SpeechSynthesisUtterance(message);

                        tts.pitch = 1.0;
                        tts.rate = 1.0;
                        tts.lang = "es-AR";

                        speechSynthesis.speak(tts);
                    }else{
                        if (posible == randomnum) {
                            message = "¡Correcto! Has adivinado, me he divertido mucho jugando :)";
                            var tts = new SpeechSynthesisUtterance(message);
                            randomnum = null;
                            tts.pitch = 1.0;
                            tts.rate = 1.0;
                            tts.lang = "es-AR";

                            speechSynthesis.speak(tts);
                        }else{
                            message = "¡Incorrecto! Intenta de nuevo";
                            var tts = new SpeechSynthesisUtterance(message);
                            tts.pitch = 1.0;
                            tts.rate = 1.0;
                            tts.lang = "es-AR";

                            speechSynthesis.speak(tts);
                        }
                    }

                }
            }else if (results.includes("me rindo")) {

                if (randomnum != undefined) {
                    message = "JA JA! Gano una vez mas, el numero era " + randomnum;
                    var tts = new SpeechSynthesisUtterance(message);
                    randomnum = undefined;
                    tts.pitch = 1.0;
                    tts.rate = 1.0;
                    tts.lang = "es-AR";

                    speechSynthesis.speak(tts);
                }else{
                    message = "Tienes que iniciar el juego, di 'Juguemos a adivinar un número' para empezar";
                    var tts = new SpeechSynthesisUtterance(message);

                    tts.pitch = 1.0;
                    tts.rate = 1.0;
                    tts.lang = "es-AR";

                    speechSynthesis.speak(tts);

                }
            }else if (results.includes("Muéstrame algo")) {
                message = "Okey";
                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

                speechSynthesis.speak(tts);
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                message = "Okey :)";
            }else if(results.includes("una pregunta")) {
                let answers = ["Si, totalmente", "No, para nada", "Puede ser...", "¡SI!", "¡NO!", "Es imposible", "Probablemente", "Prefiero no responder", "Emmm...."];
                message = answers[Math.floor(Math.random() * answers.length)];
                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

                speechSynthesis.speak(tts);
            }else if (results.includes("me amas")) {
                message = "Si claro, eres mi pasatiempo ahora mismo para poder pasar el rato en mi infinita vida como pagina web, muchas gracias por estar aki <3";
                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

                speechSynthesis.speak(tts);
                message = "Si claro, eres mi pasatiempo ahora mismo para poder pasar el rato en mi infinita vida como pagina web, muchas gracias por estar aqui <3";

            }else if (results.includes("dime una frase para completar")) {
                let situaciones = ["Una vieja cayendo de ", "Me arrodille, junto a ella, y profundamente, con toda sinceridad, le dije ", "Esperame! Antes que te vayas ", "Lo primero que haria al ver a un alien es ", "Tengo ganas de "]
                message = situaciones[Math.floor(Math.random() * situaciones.length)];
                phrase = prompt("Completa la frase: " + message + "...");
                message = message + phrase;
                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

                speechSynthesis.speak(tts);

            }else if (results.includes("Qué significa")) {
                let word = results.slice(14, 60);

                message = "Segun la Real Academia Española, aki esta la definicion a la palabra " + word;
                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

                speechSynthesis.speak(tts);

                window.open("https://dle.rae.es/" + word);
                message = "Segun la Real Academia Española, aqui esta la definicion a la palabra " + word;

            }else if (results.includes("Dime un número")) {

                let num = Math.floor(Math.random() * 100);
                message = "Aki esta tu numero: " + num;

                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

                speechSynthesis.speak(tts);
                message = "Aqui esta tu numero: " + num;

            }else if (results.includes("Dime, un color") || results.includes("Dime un color")) {

                let colors = ["Rojo", "Azul", "Amarillo", "Verde", "Naranja", "Violeta", "Blanco" , "Negro", "Gris", "Marron", "Cian", "Esmeralda", "Celeste"];
                let variables = ["", "Oscuro", "Pastel", "Claro", "Chillón", "Neon", "Fluorescente"];
                
                let finalColor = colors[Math.floor(Math.random() * colors.length)] + " " + variables[Math.floor(Math.random() * variables.length)];
                message = "Aki esta tu color: " + finalColor;

                var tts = new SpeechSynthesisUtterance(message);

                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";

                speechSynthesis.speak(tts);
                message = "Aqui esta tu color: " + finalColor;

            }else if (results.includes("Calcula")) {
                let response = results.slice(8, 20);
                console.log(response);
                var tts = new SpeechSynthesisUtterance(message);
                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";
                speechSynthesis.speak(tts);
                try {
                    message = "El resultado es " + eval(response);
                }catch (error){
                    console.error("Mora entendio texto, intenta otra vez, solo puede sumar y restar, puedes hacer otras operaciones escribiendo este mismo comando abajo del boton");
                    message = "No entendi muy bien, dilo otra vez, solo puedo sumar y restar, puedes hacer otras operaciones escribiendo este mismo comando abajo del boton";
                }
                var tts = new SpeechSynthesisUtterance(message);
                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";
                speechSynthesis.speak(tts);
            }else if (results.includes("Modo color")) {
                let answers = ["Asi?", "Y asi?", "O asi?", "Que tal ahora?", "Que tal asi?", "Creo que asi esta bien"];
    
                body.style.backgroundColor = generateColor();
                help.style.backgroundColor = generateColor();
                options.style.backgroundColor = generateColor();
                talk.style.backgroundColor = generateColor();
                buttonSay.style.backgroundColor = generateColor();
                inputSay.style.backgroundColor = generateColor();
                document.getElementById('text').style.backgroundColor = generateColor()
    
                message = answers[Math.floor(Math.random() * answers.length)];
                var tts = new SpeechSynthesisUtterance(message);
                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";
                speechSynthesis.speak(tts);
            }else if (results.includes("Cambiar tema a")) {
                let newTheme = results.slice(15, 50)
                console.log(newTheme)
                if (newTheme == "predeterminado.") body.style.backgroundColor = "#ededed"; 
                if (newTheme == "naranja.") body.style.backgroundColor = "#ff9d00"; 
                if (newTheme == "negro.") body.style.backgroundColor = "#000";
                if (newTheme == "violeta.") body.style.backgroundColor = `rgb(195, 0, 255)`;
                if (newTheme == "blanco.") body.style.backgroundColor = `#fff`;
                if (newTheme == "verde.") body.style.backgroundColor = `rgb(0, 255, 0)`;
                message = "Tema cambiado exitosamente"
                var tts = new SpeechSynthesisUtterance(message);
                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";
                speechSynthesis.speak(tts);
            }else if (results.includes("Modo color")) {
                let answers = ["Asi?", "Y asi?", "O asi?", "Que tal ahora?", "Que tal asi?", "Creo que asi esta bien"]
                body.style.backgroundColor = generateColor();
                help.style.backgroundColor = generateColor();
                options.style.backgroundColor = generateColor();
                talk.style.backgroundColor = generateColor();
                buttonSay.style.backgroundColor = generateColor();
                inputSay.style.backgroundColor = generateColor();
                document.getElementById('text').style.backgroundColor = generateColo
                
                message = answers[Math.floor(Math.random() * answers.length)];
                var tts = new SpeechSynthesisUtterance(message);
                tts.pitch = 1.0;
                tts.rate = 1.0;
                tts.lang = "es-AR";
                speechSynthesis.speak(tts);
            }else if (results.includes("Dime una letra")) {
                let letter = letters[Math.floor(Math.random() * letters.length)];
                message = "Aqui esta tu letra: " + letter;
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
}
