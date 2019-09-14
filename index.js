exports.nynm = function() {
    setInterval(() => {
        console.log('NYMN IS KOREABOO');
    }, 1);
}

exports.nynmsi = function() {
    let fuck1 = ".-. .-..-.  .-..-.   .-..-. .-.   .-. .----.   .-. .-..----. .----. .----.  .--.  .----.  .----.  .----.";
    let fuck2 = "|  `| | \ \/ / |  `.'  ||  `| |   | |{ {__     | |/ //  {}  \| {}  }| {_   / {} \ | {}  }/  {}  \/  {}  \";
    let fuck3 = "| |\  |  }  {  | |\ /| || |\  |   | |.-._} }   | |\ \\      /| .-. \| {__ /  /\  \| {}  }\      /\      /";
    let fuck4 = "`-' `-'  `--'  `-' ` `-'`-' `-'   `-'`----'    `-' `-'`----' `-' `-'`----'`-'  `-'`----'  `----'  `----'";
    
    setInterval(() => {
        console.log(fuck1);
        console.log(fuck2);
        console.log(fuck3);
        console.log(fuck4);
    }, 1);
}

exports.nynmdc = function(bro) { //idk if this works
    setInterval(() => {
        bro.channel.send('NYMN IS KOREABOO');
    }, 1);
}
