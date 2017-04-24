import React from 'react';

import { A } from 'oy-vey';

import styles from './styles';

export default ({ style, children, ...rest }) => (
  <A
    style={{
      ...styles.a,
      ...style,
    }}
    {...rest}
  >
    {children}
  </A>
);
