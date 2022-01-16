const  clock = document.querySelector('.clock');





setInterval(function(){

    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    clock.innerHTML = ` ${h}:${m}:${s}`;

},1000)