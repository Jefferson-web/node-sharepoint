const express = require('express');
const spauth = require('node-sp-auth');
const request = require('request-promise');
const AuthParser = require('./AuthParser');

const app = express();

app.get('/hello', async function (req, res) {
    const url = 'https://everisgroup.sharepoint.com/';
    const credentialOptions = {
        username: "<correo>",
        password: "<password>",
        online: true
    };
    spauth.getAuth(url, credentialOptions)
        .then(options => {
            let headers = options.headers;
            headers['Accept'] = 'application/json;odata=verbose';
            request.get({
                url,
                headers
            })
            .then(response => {
                let jsonResponse = JSON.parse(response);
                console.log(response);
                var auth = new AuthParser(jsonResponse);
                var user = auth.getUser();
                return res.json({
                    user,
                    cookie: headers.Cookie
                });
            });
        });
});

app.listen(3000, function () {
    console.log("Server listen on port " + 3000);
});