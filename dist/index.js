"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const product_1 = __importDefault(require("./models/product"));
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, mongoose_1.connect)('mongodb://localhost/typegoosedb');
        console.log('Dabase is connected to', db.connection.db.databaseName);
    });
}
;
connectDB();
function executeQueries() {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield product_1.default.create({
            name: "latopo",
            precio: 1000,
            url: "http://elproducto.co",
            tags: ['laptop', 'gaming', 'razer'],
            comments: [
                { text: 'Awesome product' },
                { text: 'X Product' }
            ]
        });
        console.log(product);
    });
}
;
executeQueries();
