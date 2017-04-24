import React from 'react';

import Oy from 'oy-vey';

import OrderConfirmation from './OrderConfirmation';

export const renderOrderConfirmationEmail = (total, address, items) => {
  return Oy.renderTemplate(
    <OrderConfirmation
      address={address}
      items={items}
      total={total}
    />, {
    title: 'Nomiku Order Confirmation',
    previewText: `This is a confirmation email
      for the order you\'ve recently made at nomiku.com.`,
  });
};
