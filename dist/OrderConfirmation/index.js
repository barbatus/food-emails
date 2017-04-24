'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../base/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Header = require('../base/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('../base/Body');

var _Body2 = _interopRequireDefault(_Body);

var _OrderInfo = require('./OrderInfo');

var _OrderInfo2 = _interopRequireDefault(_OrderInfo);

var _DeliveryInfo = require('./DeliveryInfo');

var _DeliveryInfo2 = _interopRequireDefault(_DeliveryInfo);

var _ShopItems = require('./ShopItems');

var _ShopItems2 = _interopRequireDefault(_ShopItems);

var _TotalInfo = require('./TotalInfo');

var _TotalInfo2 = _interopRequireDefault(_TotalInfo);

var _FAQ = require('./FAQ');

var _FAQ2 = _interopRequireDefault(_FAQ);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var name = _ref.name,
      deliveryDate = _ref.deliveryDate,
      address = _ref.address,
      items = _ref.items,
      total = _ref.total;

  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      _Body2.default,
      null,
      _react2.default.createElement(_OrderInfo2.default, { name: name }),
      _react2.default.createElement(_DeliveryInfo2.default, {
        deliveryDate: deliveryDate,
        address: address
      }),
      _react2.default.createElement(_ShopItems2.default, { items: items }),
      _react2.default.createElement(_TotalInfo2.default, { total: total }),
      _react2.default.createElement(_FAQ2.default, null)
    )
  );
};