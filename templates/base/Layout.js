import React from 'react';

import { Table, TBody, TR, TD } from 'oy-vey';

import styles from './styles';

export default ({ style, children }) => {
  return (
    <Table
      width="100%"
      align="center"
      style={styles.baseTable}
    >
      <TBody>
        <TR>
          <TD align="center">
            <Table
              width="640"
              align="center"
              style={{
                ...styles.baseTable,
                ...styles.border,
              }}
            >
              <TBody>
                <TR>
                  <TD>
                    {children}
                  </TD>
                </TR>
              </TBody>
            </Table>
          </TD>
        </TR>
      </TBody>
    </Table>
  );
};
