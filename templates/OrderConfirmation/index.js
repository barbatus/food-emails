import React from 'react';

import Layout from '../base/Layout';

import Header from '../base/Header';

import Body from '../base/Body';

import OrderInfo from './OrderInfo';

import DeliveryInfo from './DeliveryInfo';

import ShopItems from './ShopItems';

import TotalInfo from './TotalInfo';

import FAQ from './FAQ';

export default ({ address, items, total }) => {
  return (
    <Layout>
      <Header />
      <Body>
        <OrderInfo />
        <DeliveryInfo address={address} />
        <ShopItems items={items} />
        <TotalInfo total={total} />
        <FAQ />
      </Body>
    </Layout>
  );
};
