export class usersModel {
    constructor(data) {
        // this.data = data
        this._firstName = data.userInfos.firstName
        this._lastName = data.userInfos.lastName
        this._age = data.userInfos.age
        this._id = data.id;
        this._todayScore = data.score || data.todayScore;
        this._keyData = data.keyData

    }
}