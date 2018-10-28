
var http = require('http');

module.exports = {
    hentInfo: hentInfo,
    test: test,
    komNu: komNu
}

function hentInfo(firmanavn, callback){
  
    var country = "dk";
    const url = "https://cvrapi.dk/api?search=" + firmanavn + "&country=" + country;

    const options = {
        hostname: 'cvrapi.dk',
        path: url,
        headers: { 'User-Agent': 'Thomas API Test' }
    }

    http.get(options, (resp) => {
        var data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            var virksomhedData = JSON.parse(data);
            callback(virksomhedData);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}

function komNu(){
hentInfo("TDC", (resultat) => {
    //console.log(resultat)
    document.getElementById("infoBoks").JSON = resultat;

 });
}

function test(){
    console.log("Hej")
}