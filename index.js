"use strict";
/**
 * @version 1.0-alpha.3
 * */
exports.__esModule = true;
/**
 * The map of all case of ApiResponse.errcode.
 * @typedef {object} ResponseErrcode
 * */
var ResponseErrcode;
(function (ResponseErrcode) {
    ResponseErrcode[ResponseErrcode["Ok"] = 0] = "Ok";
    ResponseErrcode[ResponseErrcode["Error"] = 1] = "Error";
    ResponseErrcode[ResponseErrcode["TagNotFound"] = 201] = "TagNotFound";
    ResponseErrcode[ResponseErrcode["PostsNotFound"] = 202] = "PostsNotFound";
    ResponseErrcode[ResponseErrcode["CategoryNotFound"] = 203] = "CategoryNotFound";
})(ResponseErrcode = exports.ResponseErrcode || (exports.ResponseErrcode = {}));
