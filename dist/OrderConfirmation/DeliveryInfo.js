'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _oyVey = require('oy-vey');

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _Section = require('../base/Section');

var _Section2 = _interopRequireDefault(_Section);

var _TD = require('../base/TD');

var _format3 = require('../utils/format');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  address: {
    lineHeight: '30px'
  }
};

var Address = function Address(_ref) {
  var _ref$info = _ref.info,
      firstName = _ref$info.firstName,
      lastName = _ref$info.lastName,
      city = _ref$info.city,
      state = _ref$info.state,
      street = _ref$info.street,
      zip = _ref$info.zip;

  return _react2.default.createElement(
    _oyVey.Table,
    { style: styles.address, width: '100%' },
    _react2.default.createElement(
      _oyVey.TBody,
      null,
      _react2.default.createElement(
        _oyVey.TR,
        null,
        _react2.default.createElement(
          _oyVey.TD,
          null,
          (0, _format3.formatName)(firstName, lastName)
        )
      ),
      _react2.default.createElement(
        _oyVey.TR,
        null,
        _react2.default.createElement(
          _oyVey.TD,
          null,
          street
        )
      ),
      _react2.default.createElement(
        _oyVey.TR,
        null,
        _react2.default.createElement(
          _oyVey.TD,
          null,
          city + ', ' + state + ' ' + zip
        )
      )
    )
  );
};

exports.default = function (_ref2) {
  var deliveryDate = _ref2.deliveryDate,
      address = _ref2.address;
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
            null,
            'Shipping to'
          ),
          _react2.default.createElement(
            _TD.TH,
            null,
            'When'
          )
        ),
        _react2.default.createElement(
          _oyVey.TR,
          null,
          _react2.default.createElement(
            _oyVey.TD,
            { align: 'left' },
            _react2.default.createElement(Address, { info: address })
          ),
          _react2.default.createElement(
            _oyVey.TD,
            { align: 'left', vAlign: 'top' },
            'Will be delivered on ',
            (0, _format2.default)(deliveryDate, 'dddd, MMMM D'),
            'th'
          )
        )
      )
    )
  );
};