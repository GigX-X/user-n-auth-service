"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_schema_1 = require("../models/user.schema");
class UserRepository {
    async addUser(user) {
        const userDocument = new user_schema_1.UserModel(user);
        await userDocument.save();
    }
}
exports.UserRepository = UserRepository;
