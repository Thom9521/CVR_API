var http = require('http');
module.exports = {
    hentInfo: hentInfo,
    test: test
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

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
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
    console.log(resultat)

 });
}

function test(){
    console.log("Hej")
}