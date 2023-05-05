/**
 * Represents an activity model.
 * @class
 * @constructor
 * @property {Object} data - The data for the activity model.
 * @property {Object[]} _sessions - The sessions associated with the activity model.
 * @property {number} _id - The user ID associated with the activity model.
 */


export class activityModel {
    constructor(data) {
        this.data = data;
        this._sessions = data.sessions;
        this._id = data.userId
    }
}