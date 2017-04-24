
export const borderStyle = 'solid 1px #e5e5e5';

export const padding = '30px';

export default {
  border: {
    border: borderStyle,
  },
  baseTable: {
    WebkitTextSizeAdjust: '100%',
    msTextSizeAdjust: '100%',
    msoTableLspace: '0pt',
    msoTableRspace: '0pt',
    borderCollapse: 'collapse',
    margin: '0px auto',
  },
  body: {
    padding: `0 ${padding}`,
    fontFamily: 'Arial',
    fontSize: '14px'
  },
  header: {
    padding: `0 ${padding}`,
    borderBottom: borderStyle,
  },
  section: {
    borderBottom: borderStyle,
    padding: `${padding} 0`,
    lineHeight: '20px',
  },
  th: {
    fontWeight: 'bold',
  },
  a: {
    color: '#85c545',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};
