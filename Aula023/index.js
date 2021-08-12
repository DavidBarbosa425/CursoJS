function showTime() {
    let date = new Date();
    return date.toLocaleTimeString('pt-BR', {hour12: false});
}

let time = setInterval(function(){
    console.log(showTime())
}, 1000);

setTimeout(function() {
    clearInterval(time)
 }, 5000)

setTimeout(function(){
    console.log('Hello World')
}, 5000)