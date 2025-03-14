"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error("Error:", err.message || err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Something went wrong!",
    });
};
exports.default = errorHandlerMiddleware;
