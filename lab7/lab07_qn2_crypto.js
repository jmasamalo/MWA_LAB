{
    const express = require('express');
    const app = express();
    const port = 3000;
    // Nodejs encryption with CTR
    const crypto = require('crypto');
    const algorithm = 'aes256';
    const password = 'asaadsaad'; //key
    
    const MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://localhost:27017/myDB";
    var msg = "";
    
    /*
    function encrypt(text){
        var cipher = crypto.createCipher(algorithm,password)
        var crypted = cipher.update(text,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    }
     */
    
    function decrypt(text){
        var decipher = crypto.createDecipher(algorithm,password);
        var dec = decipher.update(text,'hex','utf8');
        dec += decipher.final('utf8');
        return dec;
    }
    
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        
        db.collection("homework7").findOne({}, function(err, result) {
            if (err) throw err;
            msg = decrypt(result.message);
            console.log(msg);
            db.close();
        });
    });
    
    app.get('/secret',function(request, response){
        response.status(200);
        response.set('Content-Type','text/html');
        response.send('Secret word: '+msg);
        response.end();
    });
    
    app.listen(port, () => console.log('The server is running on port %s',port));
}