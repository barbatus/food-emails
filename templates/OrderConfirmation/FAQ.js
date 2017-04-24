import React from 'react';

import { Table, TBody, TD, TR, Img } from 'oy-vey';

import Section from '../base/Section';

import A from '../base/A';

const styles = {
  faq: {
    paddingTop: 50,
    border: 0,
  },
};

export default (props) => (
  <Section style={styles.faq}>
    <Table width="100%">
      <TBody>
        <TR>
          <TD>
            <Table width="100%">
              <TBody>
                <TR>
                  <TD align="left">
                    If you have any questions, please visit our
                    <A href="https://food-dev.nom.io/faq">
                      &nbsp;FAQ page&nbsp;
                    </A>
                    for more information.
                  </TD>
                </TR>
              </TBody>
            </Table>
          </TD>
        </TR>
      </TBody>
    </Table>
  </Section>
);
