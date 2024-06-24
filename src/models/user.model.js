"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.IUser = void 0;
const joi_1 = __importDefault(require("joi"));
class IUser {
}
exports.IUser = IUser;
class User {
    constructor(options = {}) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.id = (_a = options.id) !== null && _a !== void 0 ? _a : undefined;
        this.orgId = (_b = options.orgId) !== null && _b !== void 0 ? _b : undefined;
        this.email = (_c = options.email) !== null && _c !== void 0 ? _c : undefined;
        this.firstName = (_d = options.firstName) !== null && _d !== void 0 ? _d : '';
        this.lastName = (_e = options.lastName) !== null && _e !== void 0 ? _e : '';
        this.displayName = (_f = options.displayName) !== null && _f !== void 0 ? _f : '';
        this.lastLoggedIn = (_g = options.lastLoggedIn) !== null && _g !== void 0 ? _g : undefined;
        this.password = (_h = options.password) !== null && _h !== void 0 ? _h : '';
        this.isMetaAdmin = options.isMetaAdmin || false;
    }
}
exports.User = User;
User.validationSchema = joi_1.default.object().keys({
    orgId: joi_1.default.string()
        .required(),
    email: joi_1.default.string()
        .email()
        .required()
        .allow('admin'),
    firstName: joi_1.default.string()
        .label('First Name'),
    lastName: joi_1.default.string()
        .label('Last Name'),
    password: joi_1.default.string()
        .trim()
        .required()
        .min(4)
        .max(30),
    isMetaAdmin: joi_1.default.boolean()
});
//# sourceMappingURL=user.model.js.map