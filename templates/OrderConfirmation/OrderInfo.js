import React from 'react';

import { Table, TBody, TD, TR } from 'oy-vey';

import Section from '../base/Section';

import { TH } from '../base/TD';

const styles = {
  greeting: {
    paddingBottom: 30,
    textTransform: 'capitalize',
  },
};

export default ({ name }) => (
  <Section>
    <Table width="100%">
      <TBody>
        <TR>
          <TH style={styles.greeting}>
            Hey {name}!
          </TH>
        </TR>
        <TR>
          <TD align="left">
            Thank you for your order.
            Please check the details below are correct.
          </TD>
        </TR>
      </TBody>
    </Table>
  </Section>
);
