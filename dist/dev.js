'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _templates = require('./templates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var address = {
  firstName: 'Alex',
  lastName: 'Broda',
  street: '123 Market St.',
  city: 'San Francisco',
  state: 'CA',
  zip: '94111'
};

var items = [{
  id: 'item1',
  name: 'Swedish Meatballs',
  value: 2,
  price: 22.90
}, {
  id: 'item2',
  name: 'Swedish Meatballs',
  value: 2,
  price: 22.90
}];

var total = {
  total: 109.26,
  shipping: 20.00,
  tax: 10.21
};

var server = _http2.default.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end((0, _templates.renderOrderConfirmationEmail)(total, address, items));
});

server.listen(5001);

console.log('Server is listening on 5001');