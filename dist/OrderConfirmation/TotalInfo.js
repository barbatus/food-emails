'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _oyVey = require('oy-vey');

var _Section = require('../base/Section');

var _Section2 = _interopRequireDefault(_Section);

var _format = require('../utils/format');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  table: {
    lineHeight: '25px'
  },
  total: {
    fontWeight: 'bold'
  }
};

var TotalRow = function TotalRow(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      name = _ref.name,
      price = _ref.price;
  return _react2.default.createElement(
    _oyVey.TR,
    null,
    _react2.default.createElement(
      _oyVey.TD,
      { style: style, align: 'right', width: '85%' },
      name
    ),
    _react2.default.createElement(
      _oyVey.TD,
      { style: style, align: 'right', width: '15%' },
      (0, _format.formatPrice)(price, true)
    )
  );
};

exports.default = function (_ref2) {
  var _ref2$total = _ref2.total,
      total = _ref2$total.total,
      tax = _ref2$total.tax,
      shipping = _ref2$total.shipping;
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      _oyVey.Table,
      { style: styles.table, width: '100%' },
      _react2.default.createElement(
        _oyVey.TBody,
        null,
        _react2.default.createElement(TotalRow, {
          name: 'Subtotal',
          price: total - tax - shipping
        }),
        _react2.default.createElement(TotalRow, {
          name: 'Tax',
          price: tax
        }),
        _react2.default.createElement(TotalRow, {
          name: 'Shipping',
          price: shipping
        }),
        _react2.default.createElement(TotalRow, {
          name: 'Total',
          price: total,
          style: styles.total
        })
      )
    )
  );
};