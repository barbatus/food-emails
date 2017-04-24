import http from 'http';

import { renderOrderConfirmationEmail } from './templates';

const address = {
  firstName: 'Alex',
  lastName: 'Broda',
  street: '123 Market St.',
  city: 'San Francisco',
  state: 'CA',
  zip: '94111',
};

const items = [
  {
    id: 'item1',
    name: 'Swedish Meatballs',
    value: 2,
    price: 22.90,
  },
  {
    id: 'item2',
    name: 'Swedish Meatballs',
    value: 2,
    price: 22.90,
  },
];

const total = {
  total: 109.26,
  shipping: 20.00,
  tax: 10.21,
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(renderOrderConfirmationEmail(total, address, items));
});

server.listen(5001);

console.log('Server is listening on 5001');
