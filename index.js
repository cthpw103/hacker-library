exports.nynm = function() {
    setInterval(() => {
        console.log('NYMN IS KOREABOO');
    }, 1);
}

exports.nynmsi = function() {
    let thing = `
.-. .-..-.  .-..-.   .-..-. .-.   .-. .----.   .-. .-..----. .----. .----.  .--.  .----.  .----.  .----. 
|  `| | \ \/ / |  `.'  ||  `| |   | |{ {__     | |/ //  {}  \| {}  }| {_   / {} \ | {}  }/  {}  \/  {}  \
| |\  |  }  {  | |\ /| || |\  |   | |.-._} }   | |\ \\      /| .-. \| {__ /  /\  \| {}  }\      /\      /
`-' `-'  `--'  `-' ` `-'`-' `-'   `-'`----'    `-' `-'`----' `-' `-'`----'`-'  `-'`----'  `----'  `----' 
`
    setInterval(() => {
        console.log(nynmsi);
    }, 1);
}

exports.nynmdc = function(bro) { //idk if this works
    setInterval(() => {
        bro.channel.send('NYMN IS KOREABOO');
    }, 1);
}
