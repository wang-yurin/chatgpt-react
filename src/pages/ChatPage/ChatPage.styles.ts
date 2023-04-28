import theme from '../../styles/theme';

const layoutStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const contentStyles = {
  overflowY: 'scroll',
  padding: '2rem',
};

const siderStyles = {
  padding: '1rem',
  backgroundColor: theme.colors.GREY100,
};

const footerStyles = {
  color: theme.colors.GREY400,
  textAlign: 'center',
  textDecoration: 'underline',
  padding: '0 0 2rem',
};

export { layoutStyles, contentStyles, siderStyles, footerStyles };
