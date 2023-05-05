/**
 * Represents a user.
 * @class
 * @constructor
 * @param {Object} data - The data used to create the user model.
 * @param {string} data.id - The user ID.
 * @param {Object} data.userInfos - The user's personal information.
 * @param {string} data.userInfos.firstName - The user's first name.
 * @param {string} data.userInfos.lastName - The user's last name.
 * @param {number} data.userInfos.age - The user's age.
 * @param {number} [data.score] - The user's score.
 * @param {number} [data.todayScore] - The user's today score.
 * @param {Object} data.keyData - The user's key data.
 * @param {number} data.keyData.calorieCount - The user's calorie count.
 * @param {number} data.keyData.proteinCount - The user's protein count.
 * @param {number} data.keyData.carbohydrateCount - The user's carbohydrate count.
 * @param {number} data.keyData.lipidCount - The user's lipid count.
 */


export class usersModel {
    constructor(data) {

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