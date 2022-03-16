const UserProfile = require('./UserProfile');

class AuthParser {

    constructor(data){
        this.data = data;
    }

    getUser(){
        let user = this.#getObject("user");
        return new UserProfile(user);
    }

    #getObject(name){
        var value = this.data[name];
        if(typeof(value) != 'object')
            return null;
        return value;
    }

} 

module.exports = AuthParser;