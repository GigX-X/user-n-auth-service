"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpUseCase = void 0;
const user_1 = require("../../domain/entities/user");
class SignUpUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(username, password, email) {
        const user = new user_1.User(username, password, email);
        await this.userRepository.addUser(user);
    }
}
exports.SignUpUseCase = SignUpUseCase;
