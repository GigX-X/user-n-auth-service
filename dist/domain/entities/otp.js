"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Otp = void 0;
class Otp {
    constructor(email, otp, createdAt, _id) {
        this.email = email;
        this.otp = otp;
        this.createdAt = createdAt;
        this._id = _id;
    }
}
exports.Otp = Otp;
