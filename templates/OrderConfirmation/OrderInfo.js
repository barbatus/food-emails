import React from 'react';

import { Table, TBody, TD, TR } from 'oy-vey';

import Section from '../base/Section';

import { TH } from '../base/TD';

const styles = {
  greeting: {
    paddingBottom: 30,
  },
};

export default (props) => (
  <Section>
    <Table width="100%">
      <TBody>
        <TR>
          <TH style={styles.greeting}>
            Hey Steve!
          </TH>
        </TR>
        <TR>
          <TD align="left">
            Thank you for your order, your order.
            Your order number is 12345678.
            Please check the details below are correct.
          </TD>
        </TR>
      </TBody>
    </Table>
  </Section>
);
