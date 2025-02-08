"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var realSchema = _mongoose["default"].Schema;
var publishedBooksSchema = new realSchema({
  isbn: {
    type: Number
  },
  bookTitle: {
    type: String
  },
  author: {
    type: String
  },
  description: {
    type: String
  },
  publishedYear: {
    type: Number
  },
  gender: {
    type: String
  },
  coverImage: {
    type: String
  },
  backCoverImage: {
    type: String
  },
  uploadContentPdf: {
    type: String
  },
  availabilityStatus: {
    type: String
  },
  price: {
    type: Number
  },
  ownerId: {
    type: String
  },
  likes: {
    type: Number
  },
  unlike: {
    type: Number
  }
}, {
  timestamps: true
}); // Add timestamps to track creation and update times

var PublishedBooksSchema = _mongoose["default"].model('PublishedBooksSchema', publishedBooksSchema);
var _default = exports["default"] = PublishedBooksSchema;