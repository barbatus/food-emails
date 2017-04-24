'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPrice = formatPrice;
exports.formatName = formatName;

var _trim = require('lodash/trim');

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function round(number, precision) {
  var factor = Math.pow(10, precision);
  var factored = number * factor;
  var rounded = Math.round(factored);
  return rounded / factor;
}

var alignCents = function alignCents(cents) {
  return cents < 10 ? '0' + cents : '' + cents;
};

function formatPrice(price) {
  var withFree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (price === 0 && withFree) {
    return 'Free';
  }

  var rounded = round(price, 2);
  var dols = Math.floor(rounded);
  var cents = Math.floor(rounded * 100 % 100);

  return '$' + dols + '.' + alignCents(cents);
}

function formatName(firstName, lastName) {
  return (0, _trim2.default)((firstName || '') + ' ' + (lastName || ''));
}