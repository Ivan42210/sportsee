/**
 * Represents a performance model.
 * @class
 * @constructor
 * @param {Object} data - The data used to create the performance model.
 * @param {number} data.userId - The user ID.
 * @param {Object[]} data.data - The performance data.
 * @param {string} data.kind - The kind of performance data.
 */


export class performanceModel {
    constructor(data) {
        this.data = data;
        this._id = data.userId
        this._perfData = data.data
        this._kind = data.kind


    }
}