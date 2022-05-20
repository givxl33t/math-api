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
describe('A HTTP Server', () => {
    describe('when GET /add', () => {
        it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const a = 10;
            const b = 20;
            const spyAdd = jest.spyOn(MathBasic_1.MathBasic, 'add');
            const server = (0, createServer_1.createServer)({ mathBasic: MathBasic_1.MathBasic, figureCalculator: {} });
            // Action
            const response = yield server.inject({
                method: 'GET',
                url: `/add/${a}/${b}`
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(30);
            expect(spyAdd).toBeCalledWith(a, b);
        }));
    });
    describe('when GET /subtract', () => {
        it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const a = 12;
            const b = 8;
            const spySubtract = jest.spyOn(MathBasic_1.MathBasic, 'subtract');
            const server = (0, createServer_1.createServer)({ mathBasic: MathBasic_1.MathBasic, figureCalculator: {} });
            // Action
            const response = yield server.inject({
                method: 'GET',
                url: `/subtract/${a}/${b}`
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(4);
            expect(spySubtract).toBeCalledWith(a, b);
        }));
    });
    describe('when GET /multiply', () => {
        it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const a = 10;
            const b = 5;
            const spyMultiply = jest.spyOn(MathBasic_1.MathBasic, 'multiply');
            const server = (0, createServer_1.createServer)({ mathBasic: MathBasic_1.MathBasic, figureCalculator: {} });
            // Action
            const response = yield server.inject({
                method: 'GET',
                url: `/multiply/${a}/${b}`
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(50);
            expect(spyMultiply).toBeCalledWith(a, b);
        }));
    });
    describe('when GET /divide', () => {
        it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const a = 30;
            const b = 5;
            const spyDivide = jest.spyOn(MathBasic_1.MathBasic, 'divide');
            const server = (0, createServer_1.createServer)({ mathBasic: MathBasic_1.MathBasic, figureCalculator: {} });
            // Action
            const response = yield server.inject({
                method: 'GET',
                url: `/divide/${a}/${b}`
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(6);
            expect(spyDivide).toBeCalledWith(a, b);
        }));
    });
    describe('when GET /rectangle/perimeter', () => {
        it('should respond with a status code of 200 and the payload value is rectangle perimeter calculation result correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const length = 20;
            const width = 10;
            const figureCalculator = new FigureCalculator_1.FigureCalculator(MathBasic_1.MathBasic);
            const server = (0, createServer_1.createServer)({ mathBasic: {}, figureCalculator });
            // Action
            const response = yield server.inject({
                method: 'GET',
                url: `/rectangle/perimeter/${length}/${width}`
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(60);
        }));
    });
    describe('when GET /rectangle/area', () => {
        it('should respond with a status code of 200 and the payload value is rectangle area calculation result correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const length = 30;
            const width = 5;
            const figureCalculator = new FigureCalculator_1.FigureCalculator(MathBasic_1.MathBasic);
            const server = (0, createServer_1.createServer)({ mathBasic: {}, figureCalculator });
            // Action
            const response = yield server.inject({
                method: 'GET',
                url: `/rectangle/area/${length}/${width}`
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(150);
        }));
    });
    describe('when GET /triangle/perimeter', () => {
        it('should respond with a status code of 200 and the payload value is triangle perimeter calculation result correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const sideA = 5;
            const sideB = 7;
            const base = 10;
            const figureCalculator = new FigureCalculator_1.FigureCalculator(MathBasic_1.MathBasic);
            const server = (0, createServer_1.createServer)({ mathBasic: {}, figureCalculator });
            // Action
            const response = yield server.inject({
                method: 'GET',
                url: `/triangle/perimeter/${sideA}/${sideB}/${base}`
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(22);
        }));
    });
    describe('when GET /triangle/area', () => {
        it('should respond with a status code of 200 and the payload value is triangle area calculation result correctly', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const base = 10;
            const height = 15;
            const figureCalculator = new FigureCalculator_1.FigureCalculator(MathBasic_1.MathBasic);
            const server = (0, createServer_1.createServer)({ mathBasic: {}, figureCalculator });
            // Action
            const response = yield server.inject({
                method: 'GET',
                url: `/triangle/area/${base}/${height}`
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(75);
        }));
    });
});
