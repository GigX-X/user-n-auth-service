"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, password, email, _id) {
        this.username = username;
        this.password = password;
        this.email = email;
        this._id = _id;
    }
}
exports.User = User;
