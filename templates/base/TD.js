import React from 'react';

import { TD } from 'oy-vey';

import styles from './styles';

export const TH = ({ style, children, ...rest }) => (
  <TD
    align="left"
    style={{
      ...styles.th,
      ...style,
    }}
    {...rest}
  >
    {children}
  </TD>
);
