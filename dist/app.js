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
Object.defineProperty(exports, "__esModule", { value: true });
const FigureCalculator_1 = require("./FigureCalculator");
const MathBasic_1 = require("./MathBasic");
const createServer_1 = require("./createServer");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const figureCalculator = new FigureCalculator_1.FigureCalculator(MathBasic_1.MathBasic);
    const server = (0, createServer_1.createServer)({
        mathBasic: MathBasic_1.MathBasic,
        figureCalculator
    });
    yield server.start();
    console.log(`Server start at ${server.info.uri}`);
});
start();
