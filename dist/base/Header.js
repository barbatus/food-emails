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

var Header = function Header(props) {
  return _react2.default.createElement(
    _oyVey.Table,
    {
      width: '100%',
      height: '70',
      style: _styles2.default.header
    },
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
                  _react2.default.createElement(_oyVey.Img, {
                    width: 150,
                    height: 40,
                    alt: 'Nomiku Sous Chef Meals',
                    src: 'https://img.nom.io/common/logo.png'
                  })
                )
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Header;