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

var _format = require('../utils/format');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  th: {
    paddingBottom: 20
  },
  td: {
    paddingBottom: 10
  }
};

var ShopItem = function ShopItem(_ref) {
  var _ref$item = _ref.item,
      name = _ref$item.name,
      value = _ref$item.value,
      price = _ref$item.price;
  return _react2.default.createElement(
    _oyVey.TR,
    null,
    _react2.default.createElement(
      _TD.TD,
      { style: styles.td, align: 'left', width: '70%' },
      name
    ),
    _react2.default.createElement(
      _TD.TD,
      { style: styles.td, align: 'left', width: '20%' },
      value
    ),
    _react2.default.createElement(
      _TD.TD,
      { style: styles.td, align: 'center', width: '10%' },
      (0, _format.formatPrice)(price)
    )
  );
};

exports.default = function (_ref2) {
  var items = _ref2.items;

  var itemList = items.map(function (item) {
    return _react2.default.createElement(ShopItem, { key: item.id, item: item });
  });

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
            { style: styles.th, width: '70%' },
            'Item'
          ),
          _react2.default.createElement(
            _TD.TH,
            { style: styles.th, width: '20%' },
            'Qty'
          ),
          _react2.default.createElement(
            _TD.TH,
            {
              style: styles.th,
              align: 'center',
              width: '10%'
            },
            'Price'
          )
        ),
        itemList
      )
    )
  );
};