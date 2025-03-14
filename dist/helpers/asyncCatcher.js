"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncCatcher = void 0;
const asyncCatcher = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
exports.asyncCatcher = asyncCatcher;
exports.default = exports.asyncCatcher;
