"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpUseCase = void 0;
const user_1 = require("../../domain/entities/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class SignUpUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(username, password, email) {
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = new user_1.User(username, hashedPassword, email);
        await this.userRepository.addUser(user);
    }
}
exports.SignUpUseCase = SignUpUseCase;
