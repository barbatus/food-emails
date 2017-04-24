import React from 'react';

import { Table, TBody, TD, TR } from 'oy-vey';

import Section from '../base/Section';

import { formatPrice } from '../utils/format';

const styles = {
  table: {
    lineHeight: '25px',
  },
  total: {
    fontWeight: 'bold',
  },
};

const TotalRow = ({ style = {}, name, price }) => (
  <TR>
    <TD style={style} align="right" width="85%">
      {name}
    </TD>
    <TD style={style} align="right" width="15%">
      {price}
    </TD>
  </TR>
);

export default ({ total: { total, tax, shipping } }) => (
  <Section>
    <Table style={styles.table} width="100%">
      <TBody>
        <TotalRow
          name="Subtotal"
          price={formatPrice(total - tax - shipping)}
        />
        <TotalRow
          name="Tax"
          price={formatPrice(tax)}
        />
        <TotalRow
          name="Shipping"
          price={formatPrice(shipping, true)}
        />
        <TotalRow
          name="Total"
          price={formatPrice(total)}
          style={styles.total}
        />
      </TBody>
    </Table>
  </Section>
);
