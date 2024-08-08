function choice(){
    var omikuji = ["大吉", "中吉", "小吉"];
    var rnd = Math.floor( 3 * Math.random());

    var object = document.getElementById("omi");
    object.innerText = omikuji[rnd];
}
