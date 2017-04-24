'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _oyVey = require('oy-vey');

var _Section = require('../base/Section');

var _Section2 = _interopRequireDefault(_Section);

var _A = require('../base/A');

var _A2 = _interopRequireDefault(_A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  faq: {
    paddingTop: 50,
    border: 0
  }
};

exports.default = function (props) {
  return _react2.default.createElement(
    _Section2.default,
    { style: styles.faq },
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
            _oyVey.TD,
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
                    _oyVey.TD,
                    { align: 'left' },
                    'If you have any questions, please visit our',
                    _react2.default.createElement(
                      _A2.default,
                      { href: 'https://food-dev.nom.io/faq' },
                      '\xA0FAQ page\xA0'
                    ),
                    'for more information.'
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};