import React from 'react';

import { Table, TBody, TD, TR, Img } from 'oy-vey';

import styles from './styles';

const Header = (props) => {
  return (
    <Table
      width="100%"
      height="70"
      style={styles.header}
    >
      <TBody>
        <TR>
          <TD>
            <Table width="100%">
              <TBody>
                <TR>
                  <TD align="left">
                    <Img
                      width={291}
                      height={32}
                      alt="Nomiku Sous Chef Meals"
                      src="https://img.nom.io/common/longlogo.svg"
                    />
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

export default Header;