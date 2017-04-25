import React from 'react';

import { TD as OYTD } from 'oy-vey';

import styles from './styles';

export const TH = ({ style, children, ...rest }) => (
  <OYTD
    align="left"
    style={{
      ...styles.th,
      ...style,
    }}
    {...rest}
  >
    {children}
  </OYTD>
);

export const TD = ({ style, children, ...rest }) => (
  <OYTD
    align="left"
    style={{
      ...styles.td,
      ...style,
    }}
    {...rest}
  >
    {children}
  </OYTD>
);
