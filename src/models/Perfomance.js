export class performanceModel {
    constructor(data) {
        this.data = data;
        this._id = data.userId
        this._perfData = data.data
        this._kind = data.kind


    }
}