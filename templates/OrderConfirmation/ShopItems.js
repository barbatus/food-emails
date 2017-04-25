import React from 'react';

import { Table, TBody, TR } from 'oy-vey';

import Section from '../base/Section';

import { TH, TD } from '../base/TD';

import { formatPrice } from '../utils/format';

const styles = {
  th: {
    paddingBottom: 20,
  },
  td: {
    paddingBottom: 10,
  },
};

const ShopItem = ({ item: { name, value, price } }) => (
  <TR>
    <TD style={styles.td} align="left" width="70%">
      {name}
    </TD>
    <TD  style={styles.td} align="left" width="20%">
      {value}
    </TD>
    <TD  style={styles.td} align="center" width="10%">
      {formatPrice(price)}
    </TD>
  </TR>
);

export default ({ items }) => {
  const itemList = items.map((item) => (
    <ShopItem key={item.id} item={item} />
  ));

  return (
    <Section>
      <Table width="100%">
        <TBody>
          <TR>
            <TH style={styles.th} width="70%">
              Item
            </TH>
            <TH  style={styles.th} width="20%">
              Qty
            </TH>
            <TH
              style={styles.th}
              align="center"
              width="10%"
            >
              Price
            </TH>
          </TR>
          {itemList}
        </TBody>
      </Table>
    </Section>
  );
};
