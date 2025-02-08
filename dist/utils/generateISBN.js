"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateISBN = void 0;
var generateISBN = exports.generateISBN = function generateISBN() {
  var isbn = '978';
  for (var i = 0; i < 9; i++) {
    isbn += Math.floor(Math.random() * 10);
  }
  var checksum = 0;
  for (var _i = 0; _i < 12; _i++) {
    checksum += isbn[_i] * (_i % 2 === 0 ? 1 : 3);
  }
  checksum = (10 - checksum % 10) % 10;
  isbn += checksum;
  return isbn;
};