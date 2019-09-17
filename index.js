exports.nynm = function() {
    setInterval(() => {
        console.log('NYMN IS KOREABOO');
    }, 1000);
}

exports.nynmdc = function(bro) { //idk if this works
    setInterval(() => {
        bro.channel.send('NYMN IS KOREABOO');
    }, 1000);
}

exports.nynmeris = function(msg) {
    setInterval(() => {
        msg.channel.createMessage('NYMN IS KOREABOO');
    }, 1000);
}

exports.auttaja = function(msg) {
    setInterval(() => {
        msg.channel.createMessage('Pong! took 0 ms!');
    }, 10000);
}

exports.hack = function() {
    setInterval(() => {
        console.log('HACKING......');
    }, 1000);
}
