"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const Role_1 = require("./Role");
let User = User_1 = class User {
    static findByFirstName(firstname) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find({ firstname });
        });
    }
    encryptPassword(password) {
        return '123xyz' + password;
    }
};
exports.User = User;
__decorate([
    (0, typegoose_1.prop)({ required: true, uppercase: true }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, uppercase: true }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, trim: true, lowercase: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, minlength: 8, maxlength: 20 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => Role_1.Role }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
exports.User = User = User_1 = __decorate([
    (0, typegoose_1.pre)('save', function () {
        console.log(this.firstname);
    })
], User);
;
const UserModel = (0, typegoose_1.getModelForClass)(User);
exports.default = UserModel;
