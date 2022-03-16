class UserProfile {

    constructor(userObj){
        this.Id = userObj["Id"];
        this.Email = userObj["UserPrincipalName"];
        this.Name = userObj["Title"];
    }

}

module.exports = UserProfile;