'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _oyVey = require('oy-vey');

var _Section = require('../base/Section');

var _Section2 = _interopRequireDefault(_Section);

var _TD = require('../base/TD');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  greeting: {
    paddingBottom: 30,
    textTransform: 'capitalize'
  }
};

exports.default = function (_ref) {
  var name = _ref.name;
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      _oyVey.Table,
      { width: '100%' },
      _react2.default.createElement(
        _oyVey.TBody,
        null,
        _react2.default.createElement(
          _oyVey.TR,
          null,
          _react2.default.createElement(
            _TD.TH,
            { style: styles.greeting },
            'Hey ',
            name,
            '!'
          )
        ),
        _react2.default.createElement(
          _oyVey.TR,
          null,
          _react2.default.createElement(
            _oyVey.TD,
            { align: 'left' },
            'Thank you for your order. Please check the details below are correct.'
          )
        )
      )
    )
  );
};