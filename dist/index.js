'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderOrderConfirmationEmail = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _oyVey = require('oy-vey');

var _oyVey2 = _interopRequireDefault(_oyVey);

var _OrderConfirmation = require('./OrderConfirmation');

var _OrderConfirmation2 = _interopRequireDefault(_OrderConfirmation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderOrderConfirmationEmail = exports.renderOrderConfirmationEmail = function renderOrderConfirmationEmail(name, total, deliveryDate, address, items) {
  return _oyVey2.default.renderTemplate(_react2.default.createElement(_OrderConfirmation2.default, {
    name: name,
    deliveryDate: deliveryDate,
    address: address,
    items: items,
    total: total
  }), {
    title: 'Nomiku Order Confirmation',
    previewText: 'This is a confirmation email\n      for the order you\'ve recently made at nomiku.com.'
  });
};