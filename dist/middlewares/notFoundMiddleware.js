"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundMiddleware = (_, res) => {
    res
        .status(404)
        .json({
        success: false,
        message: "Sorry, the request resource is not available 🙅‍♂️ !!!",
    });
};
exports.default = notFoundMiddleware;
