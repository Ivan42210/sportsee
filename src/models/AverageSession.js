export class AverageSession {
    constructor(data) {
        this.data = data
        this._sessions = data.sessions
        this._id = data.userId
    }
}