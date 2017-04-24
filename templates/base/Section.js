import React from 'react';

import { Table, TBody, TD, TR } from 'oy-vey';

import styles from './styles';

export default ({ style, children }) => (
  <Table width="100%" style={{ ...styles.section, ...style }}>
    <TBody>
      <TR>
        <TD align="center">
          {children}
        </TD>
      </TR>
    </TBody>
  </Table>
);
