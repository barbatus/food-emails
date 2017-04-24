'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _oyVey = require('oy-vey');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var style = _ref.style,
      children = _ref.children;
  return _react2.default.createElement(
    _oyVey.Table,
    { width: '100%', style: _extends({}, _styles2.default.section, style) },
    _react2.default.createElement(
      _oyVey.TBody,
      null,
      _react2.default.createElement(
        _oyVey.TR,
        null,
        _react2.default.createElement(
          _oyVey.TD,
          { align: 'center' },
          children
        )
      )
    )
  );
};