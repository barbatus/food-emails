import React from 'react';

import Oy from 'oy-vey';

import OrderConfirmation from './OrderConfirmation';

export const renderOrderConfirmationEmail = (
  name, total, deliveryDate, address, items
) => {
  return Oy.renderTemplate(
    <OrderConfirmation
      name={name}
      deliveryDate={deliveryDate}
      address={address}
      items={items}
      total={total}
    />, {
    title: 'Nomiku Order Confirmation',
    previewText: `This is a confirmation email
      for the order you\'ve recently made at nomiku.com.`,
  });
};
