export class usersModel {
    constructor(data) {
        // this.data = data
        this._firstName = data.userInfos.firstName
        this._lastName = data.userInfos.lastName
        this._age = data.userInfos.age
        this._id = data.id;
        this._todayScore = data.score || data.todayScore;
        this._calories = data.keyData.calorieCount;
        this._proteines = data.keyData.proteinCount;
        this._glucides = data.keyData.carbohydrateCount;
        this._lipides = data.keyData.lipidCount;

    }
}