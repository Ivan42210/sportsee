/**
 * Represents an average session.
 * @class
 * @constructor
 * @property {Object} data - The data for the average session.
 * @property {Object[]} _sessions - The sessions associated with the average session.
 * @property {number} _id - The user ID associated with the average session.
 */



export class AverageSession {
    constructor(data) {
        this.data = data
        this._sessions = data.sessions
        this._id = data.userId
    }
}