import React from 'react';

import {Table, TBody, TD, TR} from 'oy-vey';

import Section from '../base/Section';

import { TH } from '../base/TD';

import { formatName } from '../utils/format';

const styles = {
  address: {
    lineHeight: '30px',
  },
};

const Address = ({
  info: {
    firstName,
    lastName,
    city,
    state,
    street,
    zip,
  },
}) => {
  return (
    <Table style={styles.address} width="100%">
    <TBody>
      <TR>
        <TD>
          {formatName(firstName, lastName)}
        </TD>
      </TR>
      <TR>
        <TD>
          {street}
        </TD>
      </TR>
      <TR>
        <TD>
          {`${city}, ${state} ${zip}`}
        </TD>
      </TR>
    </TBody>
  </Table>
  );
};

export default ({ address }) => (
  <Section>
    <Table width="100%">
      <TBody>
        <TR>
          <TH>
            Shipping to
          </TH>
          <TH>
            When
          </TH>
        </TR>
        <TR>
          <TD align="left">
            <Address info={address} />
          </TD>
          <TD align="left" vAlign="top">
            Will be delivered on Thursday, April 13th
          </TD>
        </TR>
      </TBody>
    </Table>
  </Section>
);
