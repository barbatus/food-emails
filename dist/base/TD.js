'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TD = exports.TH = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _oyVey = require('oy-vey');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TH = function TH(_ref) {
  var style = _ref.style,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['style', 'children']);

  return _react2.default.createElement(
    _oyVey.TD,
    _extends({
      align: 'left',
      style: _extends({}, _styles2.default.th, style)
    }, rest),
    children
  );
};

exports.TH = TH;
var TD = function TD(_ref2) {
  var style = _ref2.style,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ['style', 'children']);

  return _react2.default.createElement(
    _oyVey.TD,
    _extends({
      align: 'left',
      style: _extends({}, _styles2.default.td, style)
    }, rest),
    children
  );
};
exports.TD = TD;