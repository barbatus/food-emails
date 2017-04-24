import React from 'react';

import { Table, TBody, TR, TD } from 'oy-vey';

import styles from './styles';

export default (props) => (
  <Table width="100%">
    <TBody>
      <TR>
        <TD
          align="center"
          style={styles.body}
        >
          {props.children}
        </TD>
      </TR>
    </TBody>
  </Table>
);
