'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _oyVey = require('oy-vey');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _oyVey.Table,
    { width: '100%' },
    _react2.default.createElement(
      _oyVey.TBody,
      null,
      _react2.default.createElement(
        _oyVey.TR,
        null,
        _react2.default.createElement(
          _oyVey.TD,
          {
            align: 'center',
            style: _styles2.default.body
          },
          props.children
        )
      )
    )
  );
};